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

       
 
                

        fs.renameSync(req.files.path, '../frontend/public/'+(newname+1)+'-'+(i+1)+'.png');
                // 위에서 이미지이름을 원본으로 저장해줬었는데 file system을 통해 이름을 바꿔주는 작업
            
        return res.status(200).json({message:'이미지업로드완료!'});

    });
    
    module.exports = router;