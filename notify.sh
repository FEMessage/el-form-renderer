#!/bin/sh
# https://stackoverflow.com/questions/13872048/bash-script-what-does-bin-bash-mean
echo "1/5: checking TRAVIS_TEST_RESULT"
if [ "$TRAVIS_TEST_RESULT" != "0" ]
then
  echo "build not success, bye"
  exit 1
fi

ORG_NAME=$(echo "$TRAVIS_REPO_SLUG" | cut -d '/' -f 1)
REPO_NAME=$(echo "$TRAVIS_REPO_SLUG" | cut -d '/' -f 2)

echo "2/5: pushing commit and tag to github"
# 该命令很可能报错，但不影响实际进行，因而不能简单地在脚本开头 set -e 
git remote add github https://$GITHUB_TOKEN@github.com/$TRAVIS_REPO_SLUG.git > /dev/null 2>&1
git push github HEAD:master --follow-tags

echo "3/5: generating github release notes"
GREN_GITHUB_TOKEN=$GITHUB_TOKEN yarn release

# 避免发送错误信息
if [ $? -ne 0 ]
then
  echo "gren fails, bye"
  exit 1
fi

echo "4/5: downloading github release info"
url=https://api.github.com/repos/$TRAVIS_REPO_SLUG/releases/latest
resp_tmp_file=resp.tmp

curl -H "Authorization: token $GITHUB_TOKEN" $url > $resp_tmp_file

html_url=$(sed -n 5p $resp_tmp_file | sed 's/\"html_url\"://g' | awk -F '"' '{print $2}')
body=$(grep body < $resp_tmp_file | sed 's/\"body\"://g;s/\"//g')
version=$(echo $html_url | awk -F '/' '{print $NF}')

echo "5/5: notifying with dingtalk bot"
msg='{"msgtype": "markdown", "markdown": {"title": "'$REPO_NAME'更新", "text": "@所有人\n# ['$REPO_NAME'('$version')]('$html_url')\n'$body'"}}'

curl -X POST https://oapi.dingtalk.com/robot/send\?access_token\=$DINGTALK_ROBOT_TOKEN -H 'Content-Type: application/json' -d "$msg"

rm $resp_tmp_file

echo "executing notify.sh successfully"
