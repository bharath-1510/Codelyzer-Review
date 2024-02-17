import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'expectedOutput'
})
export class ExpectedOutputPipe implements PipeTransform {
  transform(description: string): any {
    const start = description.indexOf('Expected Output :') + 'Expected Output :'.length;
    const end = description.indexOf(']', start) + 1;
    const expectedOutputString = description.substring(start, end).trim();
    try {
      // Try to parse the expected output as JSON
      return JSON.parse(expectedOutputString);
    } catch (error) {
      // If parsing fails, return the original string
      return expectedOutputString;
    }
  }
}