export const lengthAwareMixing = {
  computed: {
    calculateLengthComputed() {
      return this.secondText + ` ${this.secondText.length}`
    }
  }
}