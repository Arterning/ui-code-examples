import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

const validatorInput = (data) => {
  /**
   * validator.isEmpty方法验证是否为空
   */
  const errors: any = {}
  if (validator.isEmpty(data.username)) {
    errors.username = '用户名不能为空'
  }
  if (validator.isEmpty(data.password)) {
    errors.password = '密码不能为空'
  }

  return {
    // 如果 value 为空，那么返回 true，否则返回 false。
    isValid: !isEmpty(errors),
    errors,
  }
}

export default validatorInput
