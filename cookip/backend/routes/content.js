const express = require("express");
const cc = require("kleur");
const db = require("../database/dbConnection");
const router = express.Router();
var multer = require('multer');     // 이미지 업로드를 위해 사용
var fs = require('fs');             // 이미지 업로드를 위해 사용

// multer을 이용해 파일 업로드 기능 구현
var storage = multer.diskStorage({
    destination: function (req, file, cb) {	// 경로 => uploads 폴더
        cb(null, '../frontend/public/')
    },
    filename: function (req, file, cb) {	// 파일명 => 이미지 업로드시 원본 이름 그대로
        cb(null, file.originalname);
    }
})
var upload = multer({ storage: storage });

router.post('/imagesave', upload.array('filelist'), function(req, res) {
    console.log(cc.green('Request Body:', req.files));

    // 전송된 formdata의 filelist에 해당하는 value 값들을 multer을 통해 저장
        var i, newname;
        db.content.findOne({	// 새 글 작성시 기존에 있던 가장 큰 id+1로 자동 저장되므로 가장 큰 id를 찾아줌
            limit: 1,
            order: [['id', 'DESC']],
            raw:true,
        }).then(result => {
            try {
                newname = result.id;
            } catch (e) {
                // 등록된 글이 하나도 없으면 id가 Null이여서 에러 발생
                // 이 상황에서는 newname을 0으로 설정해줌
                newname = 0;
            }
            for(i=0;i<req.files.length;i++) {
                fs.renameSync(req.files[i].path, '../frontend/public/'+(newname+1)+'-'+(i+1)+'.png');
                // 위에서 이미지이름을 원본으로 저장해줬었는데 file system을 통해 이름을 바꿔주는 작업
            }
            return res.status(200).json({message:'이미지업로드완료!'});
        }).catch(err => {
            console.log(err);
            return res.status(404).json({message: '에러뜸'});
        })
    });
    
    module.exports = router;