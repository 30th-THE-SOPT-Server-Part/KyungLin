// extended reference
// 서로 다른 collection에서 자주 사용되는 경우 내부에 저장함

// {   _id: 1,
//     order: {
//         product: "TV"
//     }
// }

// {
//     _id: 1,
//     name: "박진형",
//     age: 20
// }


// {
//     _id: 1,
//     customer: {
//         name: "박진형",
//         age: 20
//     },
//     order: {
//         product: "TV"
//     }
// }

// subset => 더보기를 누르기 전에 미리 보일 데이터를 embed시켜놓는 것
// 다른 collection에 있는 분리된 데이터. 너무 큰 collection의 경우 join이 어렵기 때문에 이렇게 쓸 수 있음
// Update시 양쪽 모두를 수정해야한다.


// 비지니스 로직은 service Layer로 
// service layer는 req,res를 받지 않음. 이는 controller layer에서만


// .env는 보안상 공개되지 않아야 하는 정보를 담은 파일 / 당연히 gitignore에 포함
// port 번호와 mongodb_uri가 들어감
