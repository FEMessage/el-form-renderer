import {oldContent, expectContent} from './config'
import transformContent from '../src/transform-content'

test('transform content', () => {
  expect(transformContent(oldContent)).toEqual(expectContent)
})
