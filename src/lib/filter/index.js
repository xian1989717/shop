import Vue from 'vue'
/**
 * 货币格式化
 * currencyType 货币符号
 */

Vue.filter('formatMoney', (value) => {
    return value + ".00";
})
