import axios from 'axios';
function CheckBrowser(){
    const userAgent = navigator.userAgent;

    // 브라우저 판단
    if (userAgent.indexOf("Chrome") !== -1) {
        return("Chrome");
    } else if (userAgent.indexOf("Mobile") !== -1) {
        return("Mobile");
    } else {
        return("Others");
    }
}

//리턴값 [지갑키,체인id] 또는 -1
async function GetAcountChrome() {
    const { klaytn } = window;
    const accounts = await klaytn.enable();
    if (klaytn.networkVersion == 8217 || klaytn.networkVersion == 1001) {
      return [accounts[0], klaytn.networkVersion];
    } else if (!klaytn.isKaikas) {
      const result = window.confirm('Kaikas 지갑이 설치되어 있지 않습니다. 설치 페이지로 이동하시겠습니까?');
      if (result) {
        window.open('https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi', '_blank');
      } else {
        alert('Kaikas 지갑이 설치되어 있어야 이용이 가능합니다.');
      }
      return -1;
    }
  }
  async function GetAcountMobile() {
    return new Promise((resolve, reject) => {
        const apiUrl = 'https://api.kaikas.io/api/v1/k/prepare';
        const requestData = {
        type: 'auth',
        bapp: {
            name: 'test app',
            callback: {
            success: 'https://www.google.com/search?q=success',
            fail: 'https://www.google.com/search?q=fail'
            }
        }
        };
        const headers = {
        'Content-Type': 'application/json; charset=utf-8'
        };
        axios
        .post(apiUrl, requestData, { headers: headers })
        .then((response) => {
            // 요청이 성공했을 때의 처리
            console.log('Response:', response.data);

            resolve([response.data.request_key,response.data.chain_id]);
        })
        .catch((error) => {
            // 카이카스 지갑 설치 페이지로 연결 후 리다이렉트
            // 모바일에서 작동을 테스트 후에 설치가 필요하다는 메시지 알림을 띄울 방식을 결정
            console.error('Error:', error);
            window.open('https://play.google.com/store/search?q=kaikas&c=apps&hl=ko-KR', '_blank');
            reject(error);
        });
    })
}
async function GetAcount(){
    const browser = CheckBrowser();
    if(browser === "Chrome"){
        const account = GetAcountChrome();
        if(account !== -1){
            return account;
        }
    } else if(browser === "Mobile"){
        try {
            const account =  GetAcountMobile();
            return account;
        } catch(e){
            console.log(e);
        }
    } else {
        alert("해당 기능은 Chrome 환경에서만 작동합니다. Chrome 브라우저를 사용해서 다시 시도해주세요.");
    }
}

export default GetAcount;