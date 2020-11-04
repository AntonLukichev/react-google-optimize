/**
 * Максимальное кол-во проверок
 * @type {number}
 */
const TIMEOUT = 20
/**
 * Пауза между проверками
 * @type {number}
 */
const DELAY = 200

/**
 * Класс для работы с Google Optimize
 */
class Optimize {
  /**
   * Метод для получения варианта эксперимента
   * @param {string} experimentID - ID эксперимента
   * @returns {Promise<undefined|number>} - возвращает Promise
   */
  // eslint-disable-next-line class-methods-use-this
  getVariant(experimentID) {
    const dataLayer = window.dataLayer || []
    dataLayer.push({ event: 'optimize.activate' })

    return new Promise((resolve, reject) => {
      let tick = 0
      // eslint-disable-next-line consistent-return
      const timerID = setInterval(() => {
        if (window.google_optimize !== undefined) {
          const variant = window.google_optimize.get(experimentID)
          if (variant === undefined) {
            resolve(undefined) //	неизвестный эксперимент
          }
          resolve(parseInt(variant)) //	успешно получен ответ
          clearInterval(timerID)
        }
        if (tick === TIMEOUT) {
          clearInterval(timerID)
          if (window.google_optimize === undefined) {
            reject(new Error('Google Optimize not found')) //	ошибка
          }
          resolve(undefined) //	не получили значение варианта
        }
        tick += 1
      }, DELAY)
    })
  }
}

export const OptimizeService = new Optimize()

export default OptimizeService
