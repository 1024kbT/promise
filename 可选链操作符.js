/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-03 16:18:05
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-03 16:22:43
 */
function main (config) {
  const dbHost = config?.db?.host
  console.log(dbHost);
}
main({
  db: {
    host: '123123312',
    name: '12312'
  },
  cache: {
    host: '2321321'
  }
})