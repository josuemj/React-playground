export class Calculator {
  sum(nums: number[]): number {
    return nums.reduce((acc, num) => acc + num, 0);
  }

  subtract(nums: number[]): number {
    return nums.reduce((acc, num) => acc - num);
  }

  multiply(nums: number[]): number {
    return nums.reduce((acc, num) => acc * num, 1);
  }
  divide(nums: number[]): number {
    return nums.reduce((acc, num) => acc / num);
  }

  average(nums: number[]): number {
    return this.sum(nums) / nums.length;
  }

  max(nums: number[]): number {
    return Math.max(...nums);
  }
}
