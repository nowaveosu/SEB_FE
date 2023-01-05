console.log('leehi?')

let elInputUsername = document.querySelector('#username') //id값을 쿼리
console.log(elInputUsername)

elInputUsername.value = '김코딩'
//dom으로 html을 js세계로 끌고온다.
let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage

elFailureMessage.classList.remove('hide')

elInputUsername.onkeyup = function(){//키보드가 눌렸을때
    console.log(elInputUsername.value)

    if(isMoreThan4Length(elInputUsername.value)){
        console.log('4글자보다큼')
    }
    else{
        console.log('짧음')
    }
}
function isMoreThan4Length(value){
    return value.length >= 4
}



//css로 메세지를 안보이게만 해두자
//css display:none을 js로 조절해보자
//중간중간 console.log찍는거 중요
//elFailureMessage.style.display = 'none'
//css파일과 클래스를 조합해보자
//hide 클래스를 주고 css 디스플레이 넌으로 해놨다.
// 처음엔 안보이고, 클래스에 따라서 보이게 조정
//어떻게 해야 보이나? hide 클래스를 없애면 되겠다.

//로직은 항상 수도코드먼저
//아이디 입력창에 글자를 키보드로 입력할때 > 이벤트를 이용
//글자수가 4개 이상이면
//사용할수있는 아이디입니다 메시지가 출력됩니다.
