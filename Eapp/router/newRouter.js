.state('searchPolicy',{//保单查询页面
url: '/searchPolicy',
templateUrl : 'appMP/module/html/searchPolicy.html',
cache:false
})
.state('policyInfo',{//保单详细信息页面
url: '/policyInfo',
templateUrl : 'appMP/module/html/policyInfo.html',
cache:false
})
.state('qchooseItem',{//e实时保全项目选择
url: '/qchooseItem',
templateUrl : 'appMP/module/html/mq/mp_q_chooseItem.html',
cache:false
})
.state('qct',{//解除合同
url: '/qct',
templateUrl : 'appMP/module/html/mq/mp_q_contractTerminate.html',
cache:false
})
.state('qhjtr',{//恢复交费/复交
url: '/qhjtr',
templateUrl : 'appMP/module/html/mq/mp_q_recoveryFeeTR.html',
cache:false
})
.state('qrf',{//保单还款
url: '/qrf',
templateUrl : 'appMP/module/html/mq/mp_q_refundPolicy.html',
cache:false
})
.state('qbx',{//不同意续保
url: '/qbx',
templateUrl : 'appMP/module/html/mq/mp_q_disagreeRenewal.html',
cache:false
})
.state('qcd',{//联系方式变更
url: '/qcd',
templateUrl : 'appMP/module/html/mq/mp_q_changeAddress.html',
cache:false
})
.state('qap',{//保费逾期未付选择方
url: '/qap',
templateUrl : 'appMP/module/html/mq/mp_q_changePayWayPremium.html',
cache:false
})
.state('qcm',{//客户资料
url: '/qcm',
templateUrl : 'appMP/module/html/mq/mp_q_changeCustomerInformation.html',
cache:false
})
.state('qdc',{//争议处理方式
url: '/qdc',
templateUrl : 'appMP/module/html/mq/mp_q_disputeConduct.html',
cache:false
})
.state('qpc',{//账号变更
url: '/qpc',
templateUrl : 'appMP/module/html/mq/mp_q_changeRenewalAccount.html',
cache:false
})
.state('qam',{//万能险追加保费
url: '/qam',
templateUrl : 'appMP/module/html/mq/mp_q_addPremiumUniversal.html',
cache:false
})
/**e填单平台**/
.state('ochooseItem',{//e填单平台项目选择
url: '/ochooseItem',
templateUrl : 'appMP/module/html/mo/mp_o_chooseItem.html',
cache:false
})
.state('ops',{//签名变更
url: '/ops',
templateUrl : 'appMP/module/html/mo/mp_o_changeAutograph.html',
cache:false
})
.state('ocd',{//联系方式变更
url: '/ocd',
templateUrl : 'appMP/module/html/mo/mp_o_changeAddress.html',
cache:false
})
.state('oap',{//保费预期未付选择方式
url: '/oap',
templateUrl : 'appMP/module/html/mo/mp_o_changePayWayPremium.html',
cache:false
})
.state('odc',{//争议处理方式
url: '/odc',
templateUrl : 'appMP/module/html/mo/mp_o_disputeConduct.html',
cache:false
})
.state('opc',{//账号变更
url: '/opc',
templateUrl : 'appMP/module/html/mo/mp_o_changeRenewalAccount.html',
cache:false
})
.state('oct',{//解除合同
url: '/oct',
templateUrl : 'appMP/module/html/mo/mp_o_contractTerminate.html',
cache:false
})
.state('ohjtr',{//恢复交费/复交
url: '/ohjtr',
templateUrl : 'appMP/module/html/mo/mp_o_recoveryFeeTR.html',
cache:false
})
.state('orf',{//保单还款
url: '/orf',
templateUrl : 'appMP/module/html/mo/mp_o_refundPolicy.html',
cache:false
})
.state('ocm',{//客户资料变更
url: '/ocm',
templateUrl : 'appMP/module/html/mo/mp_o_changeCustomerInformation.html',
cache:false
})
.state('oaa',{//增加保额
url: '/oaa',
templateUrl : 'appMP/module/html/mo/mp_o_addAmount.html',
cache:false
})
.state('opt',{//减少保额
url: '/opt',
templateUrl : 'appMP/module/html/mo/mp_o_reduceAmount.html',
cache:false
})
.state('oam',{//万能险追加保费
url: '/oam',
templateUrl : 'appMP/module/html/mo/mp_o_addPremiumUniversal.html',
cache:false
})
.state('oao',{//投保人职业变更
url: '/oao',
templateUrl : 'appMP/module/html/mo/mp_o_changeApplicantOccupation.html',
cache:false
})
.state('oio',{//被保人职业变更
url: '/oio',
templateUrl : 'appMP/module/html/mo/mp_o_changeInsuredOccupation.html',
cache:false
})
.state('obc',{//受益人变更
url: '/obc',
templateUrl : 'appMP/module/html/mo/mp_o_changeBeneficiary.html',
cache:false
})
.state('obm',{//红利领取方式变更
url: '/obm',
templateUrl : 'appMP/module/html/mo/mp_o_changeBM.html',
cache:false
})
.state('oln',{//保单借款
url: '/oln',
templateUrl : 'appMP/module/html/mo/mp_o_loanPolicy.html',
cache:false
})
.state('oip',{//投连追加保费
url: '/oip',
templateUrl : 'appMP/module/html/mo/mp_o_addULP.html',
cache:false
})
.state('opa',{//投资比例变更
url: '/opa',
templateUrl : 'appMP/module/html/mo/mp_o_changePA.html',
cache:false
})
.state('opu',{//减额交清
url: '/opu',
templateUrl : 'appMP/module/html/mo/mp_o_reducePU.html',
cache:false
})
.state('ons',{//新增附加险
url: '/ons',
templateUrl : 'appMP/module/html/mo/mp_o_addRider.html',
cache:false
})
.state('oti',{//账户转换
url: '/oti',
templateUrl : 'appMP/module/html/mo/mp_o_changeAccounts.html',
cache:false
})
.state('olr',{//补发保单
url: '/olr',
templateUrl : 'appMP/module/html/mo/mp_o_reissuedPolicy.html',
cache:false
})
.state('ohi',{//增补告知
url: '/ohi',
templateUrl : 'appMP/module/html/mo/mp_o_addInform.html',
cache:false
})
.state('oop',{//万能险部分领取
url: '/oop',
templateUrl : 'appMP/module/html/mo/mp_o_drawOP.html',
cache:false
})
.state('ocl',{//计划变更
url: '/ocl',
templateUrl : 'appMP/module/html/mo/mp_o_changePlanType.html',
cache:false
})
.state('ocp',{//期交保险费变更
url: '/ocp',
templateUrl : 'appMP/module/html/mo/mp_o_changePayPeriod.html',
cache:false
})
.state('ofq',{//保费交付方式变更
url: '/ofq',
templateUrl : 'appMP/module/html/mo/mp_o_changeFQ.html',
cache:false
})
.state('oft',{//交费年期
url: '/oft',
templateUrl : 'appMP/module/html/mo/mp_o_changePayTerm.html',
cache:false
})
.state('ore',{//复效
url: '/ore',
templateUrl : 'appMP/module/html/mo/mp_o_recoverEfficacy.html',
cache:false
})
.state('oar',{//投连部分领取
url: '/oar',
templateUrl : 'appMP/module/html/mo/mp_o_drawULP.html',
cache:false
})
.state('obx',{//不同意续保
url: '/obx',
templateUrl : 'appMP/module/html/mo/mp_o_disagreeRenewal.html',
cache:false
})
.state('bank',{//银行信息填写
url: '/bank',
templateUrl : 'appMP/module/html/mo/mp_o_bankInfoPage.html',
cache:false
})
.state('health',{//健康告知信息填写页面
url: '/health',
templateUrl : 'appMP/module/html/mo/mp_o_healthInfoPage.html',
cache:false
})
.state('unpayAccInfo',{//健康告知信息填写页面
url: '/unpayAccInfo',
templateUrl : 'appMP/module/html/mo/mp_o_unpayBankAcc.html',
cache:false
})
