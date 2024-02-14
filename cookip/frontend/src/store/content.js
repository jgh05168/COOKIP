var multer = require('multer');
var fs = require('fs');

// multer을 이용해 파일 업로드 기능 구현
var storage = multer.diskStorage({
    destination: function (req, file, cb) {    // 경로 => uploads 폴더
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {    // 파일명 => 이미지 업로드시 원본 이름 그대로
        cb(null, file.originalname);
    }
})
var upload = multer({ storage: storage });

router.post('/write', function(req, res){        // 글 작성
    
    db.content.create({                // 게시판번호와 게시글정보를 req.body로 받아와 db에 삽입
        boardnum: req.body.boardnum,
        writer: req.body.writer,
        title: req.body.title,
        text: req.body.text,
        imagecnt: req.body.imagecnt
    }).then(function(){
        return res.status(200).json({
            message: '글 작성 완료!',
        })
    }).catch(function(err){
        console.log(err);
        return res.status(404).json({message: '에러뜸'});
    })
});