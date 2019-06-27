import {oldContent, expectContent} from './content'
import transformContent from '../src/transform-content'

test('transform content', () => {
  expect(transformContent(oldContent)).toEqual(expectContent)
})
