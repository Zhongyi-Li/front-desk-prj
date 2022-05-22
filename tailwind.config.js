/*
 * @Author: 'Zhongyi-Li' '1404377808@qq.com'
 * @Date: 2022-05-15 17:21:12
 * @LastEditors: 'Zhongyi-Li' '1404377808@qq.com'
 * @LastEditTime: 2022-05-15 17:24:43
 * @FilePath: \imooc-front\tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  //tailwind应用的范围
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.25rem', '0.35rem'],
        sm: ['0.35rem', '0.45rem'],
        base: ['0.45rem', '0.55rem'],
        lg: ['0.55rem', '0.65rem'],
        xl: ['0.65rem', '0.75rem']
      },
      boxShadow: {
        'l-white': '-10px 0 10px white'
      },
      height: {
        header: '72px',
        main: 'calc(100vh - 72px)'
      }
    }
  },

  plugins: []
}
