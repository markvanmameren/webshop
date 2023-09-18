import { NumberAsEuroPipe } from './number-as-euro.pipe'

describe('NumberAsEuroPipe', () => {
  let pipe: NumberAsEuroPipe

  beforeEach(() => {
    pipe = new NumberAsEuroPipe()
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy()
  })

  describe('transform', () => {
    it('should transform a string without decimals', () => {
      const value = '123'

      const result = pipe.transform(value)

      expect(result).toBe('€ 123,00')
    })
    it('should transform a string with decimals', () => {
      const value = '123.45'

      const result = pipe.transform(value)

      expect(result).toBe('€ 123,45')
    })
    it('should transform a number without decimals', () => {
      const value = 123

      const result = pipe.transform(value)

      expect(result).toBe('€ 123,00')
    })
    it('should transform a number with decimals', () => {
      const value = 123.45

      const result = pipe.transform(value)

      expect(result).toBe('€ 123,45')
    })
  })
})
