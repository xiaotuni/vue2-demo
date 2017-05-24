import superagent from 'superagent';
import Utility from '../Common/Utility';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  const _ApiUrl = 'http://127.0.0.1:12345/api' + adjustedPath;
  return _ApiUrl;
}

export default class ApiClient {

  API = {
    Common: {
      /**
       * GET api/depts 获取组织机构
       * -------------------------------------参入的参数-------------------------------------------
       */
      Organization: '/depts',
    }
  }

  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));

        if (params) {
          request.query(params);
        }

        if (req && req.get('cookie')) {
          request.set('cookie', req.get('cookie'));
        }

        if (data) {
          request.send(data);
        }

        /**
         * 错误处理及提示
         *
         * @param {any} err
         */
        function __ProcessError(err, body, __req) {
          try {
            Utility.$loadingHide();
            if (err.status) {
              if (Utility.constItem.Events.HttpStatus[err.status]) {
                // 删除loading
                if (err.status === 400 && Utility.constItem.Events.HttpStatus[__req.status]) {
                  Utility.$emit(Utility.constItem.Events.HttpStatus[__req.status], err, body);
                } else {
                  Utility.$emit(Utility.constItem.Events.HttpStatus[err.status], err, body);
                }
              }
            } else if (!!err.crossDomain) {
              Utility.$actionSheet('与服务器连接中断...');
            } else if (err.message && err.message !== '') {
              Utility.$actionSheet(err.message);
            }
          } catch (ex) {
            console.log(ex);
          }
        }

        function __SendRequest(_request) {
          _request.end((err, Request) => {
            const { body } = Request || {};
            if (err) {
              __ProcessError(err, body, Request);
              reject(body || err);      // reject-->拒绝; resolve-->解决
            } else {
              if (!body) {
                Utility.$emit(Utility.constItem.Events.HttpStatus[Request.status],
                  { status: Request.status, msg: '处理成功' }, Request);
              }
              resolve(body);
            }
          });
        }

        try {
          // 获取用户信息
          __SendRequest(request);

          // const __ConfigInfo = Utility.getContent(Utility.constItem.SaveUserConfigInfo);
          // if (__ConfigInfo) {
          //   const { Authorization } = __ConfigInfo;
          //   if (Authorization) {
          //     request.header.Authorization = Authorization;
          //   }
          // } else {
          //   // __SendRequest(request);
          //   const urlInfo = Utility.parseURL(window.location.href);
          //   const __params = urlInfo.params;
          //   const ticket = __params.ticket;
          //   if (ticket) {
          //     const __Path = '/home/config?ticket=' + ticket;
          //     if (__Path !== path) {
          //       const requestConfig = superagent.get(formatUrl(__Path));
          //       requestConfig.end((configErr, configRequest) => {
          //         const _configRequest = configRequest || {};
          //         const configBody = _configRequest.body;
          //         if (configBody) {
          //           const UserInfo = configBody.MEMBER;
          //           UserInfo.token = configBody.Authorization;
          //           Utility.setContent(Utility.constItem.UserInfo, UserInfo, true);
          //           delete configBody.MEMBER;
          //           Utility.setContent(Utility.constItem.SaveUserConfigInfo, configBody, true);
          //           Utility.setContent('IsInitConfigComplete', true);
          //           request.header.Authorization = UserInfo.token;
          //           __SendRequest(request);
          //         } else {
          //           __ProcessError(configErr, configBody, configRequest);
          //         }
          //       });
          //     } else {
          //       __SendRequest(request);
          //     }
          //   } else {
          //     Utility.$actionSheet('Url未传ticket,获取配置及用户信息失败。');
          //     reject({ msg: 'ticket未找到' });
          //   }
          // }
        } catch (ex) {
          console.log(ex);
        }
      }));
  }
  empty() {
  }


  // put(url, params, data) {
  //   console.log('put...');
  // }
  // post(url, params, data) {
  //   console.log('post...');
  // }
  // get(url, params, data) {
  //   console.log('get...');
  // }
  // delete(url, param, data) {
  //   console.log('delete...');
  // }
  // patch(url, param, data) {
  //   console.log('patch...');
  // }
}
