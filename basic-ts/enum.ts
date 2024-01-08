// 성별, 부서코드, 카테고리, ...

enum categoryEnum {
H = "H",
K = "K",
S = "S",
}

const category: categoryEnum = categoryEnum.H;
// const category = "";

//  서버

function cate(category: categoryEnum){
    if(category === 'H') {
        console.log('5% 할인');
    } else if(category === 'K') {
        console.log('10% 할인');
    } else if(category === 'S') {
        console.log('80% 할인');
    } else {
        console.log('서버 멈춤');
    }
}
cate(category);

// 리터럴 타입
enum sexEnum {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    ETC = 'ETC',
}



const sex : 'MALE' | 'FEMALE' | 'ETC' = "ETC"; // 같은 내용 이지만 1회성 리터럴 코드
const sex2 : sexEnum = sexEnum.ETC; //  재활용 가능한 enum 코드


// type sexType = 'MALE' | 'FEMALE' | 'ETC';
//  enum 대신 type 을 이용할수도 있다