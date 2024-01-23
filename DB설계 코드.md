CREATE TABLE `Ingredient_Availble` (
	`user_id`	int	NOT NULL,
	`ingredient_id`	int	NOT NULL,
	`ingredient name`	varChar(100)	NULL,
	`expiration_data`	Datetime	NULL	COMMENT '5일 또는 날짜'
);

CREATE TABLE `User` (
	`user_id`	int	NOT NULL,
	`login_id`	varChar(30)	NULL,
	`password`	varChar(30)	NULL,
	`username`	varChar(100)	NULL,
	`email`	varChar(100)	NULL,
	`age`	int	NULL,
	`phone_number`	varChar(30)	NULL,
	`is_superuser`	boolean	NULL	COMMENT '관리자의 권한으로 생성된 레시피를 삭제할 수 있다'
);

CREATE TABLE `Recipe` (
	`recipe_id`	int	NOT NULL	COMMENT '레시피는 id로 구분된다',
	`category_id`	int	NOT NULL,
	`name`	varChar(100)	NULL,
	`thumbnail`	Text(255)	NULL,
	`url`	Text(255)	NULL
);

CREATE TABLE `Clear_Cardinality` (
	`recipe_id`	int	NOT NULL,
	`user_id`	int	NOT NULL,
	`Ingredient_id`	int	NOT NULL
);

CREATE TABLE `Profile_Favorite_Recipe` (
	`recipe_id`	int	NOT NULL	COMMENT '1',
	`profile_id`	int	NOT NULL	COMMENT '1'
);

CREATE TABLE `Ingredient` (
	`ingredient_id`	int	NOT NULL	COMMENT '1',
	`ingredient_name`	varChar(100)	NOT NULL	COMMENT '사과',
	`prep_ingredients`	Text(255)	NULL,
	`storage_method`	Text(255)	NULL,
	`purchase_tips`	Text(255)	NULL
);

CREATE TABLE `Clear_Cardinality2` (
	`recipe_id`	int	NOT NULL,
	`ingredient_id`	int	NOT NULL
);

CREATE TABLE `Chef` (
	`recipe_id`	int	NOT NULL	COMMENT '레시피는 id로 구분된다',
	`chef_id`	int	NOT NULL	COMMENT '레시피 만든 쉐프 id'
);

CREATE TABLE `Profile_Score` (
	`recipe_id`	int	NOT NULL	COMMENT '1',
	`profile_id`	int	NOT NULL	COMMENT '1',
	`scroe`	int	NULL	COMMENT '3'
);

CREATE TABLE `Profile_Favorite_Ingredient` (
	`ingredient_id`	int	NOT NULL,
	`user_profile_id`	int	NOT NULL
);

CREATE TABLE `Profile_Favorite_Category2` (
	`category_id`	int	NOT NULL,
	`profile_id`	int	NOT NULL
);

CREATE TABLE `Profile_Favorite_Category` (
	`category_id`	int	NOT NULL,
	`category`	varChar(20)	NOT NULL	COMMENT '한식'
);

CREATE TABLE `Ingredient_List` (
	`recipe_id`	int	NOT NULL	COMMENT '레시피는 id로 구분된다',
	`ingre_name`	text(255)	NOT NULL
);

CREATE TABLE `Recipe_Method` (
	`recipe_id`	int	NOT NULL	COMMENT '레시피는 id로 구분된다',
	`method`	text(255)	NOT NULL	COMMENT '1.감자 체썰기 2.당근 볶기',
	`method_img`	text(255)	NOT NULL	COMMENT '1.사진 2.사진'
);

CREATE TABLE `Users_Profile` (
	`profile_id`	int	NOT NULL,
	`user_id`	int	NOT NULL,
	`profile_name`	varChar(100)	NOT NULL,
	`profile_nickname`	varChar(100)	NULL,
	`profile_face`	BLOB	NULL
);

CREATE TABLE `Profile_Allergy` (
	`ingredient_id`	int	NOT NULL	COMMENT '1',
	`user_profile_id`	int	NOT NULL	COMMENT '아빠 id',
	`allergy`	varChar(20)	NULL
);

CREATE TABLE `Profile_Follow` (
	`chef_id`	int	NOT NULL,
	`user_id`	int	NOT NULL
);

ALTER TABLE `Ingredient_Availble` ADD CONSTRAINT `PK_INGREDIENT_AVAILBLE` PRIMARY KEY (
	`user_id`,
	`ingredient_id`
);

ALTER TABLE `User` ADD CONSTRAINT `PK_USER` PRIMARY KEY (
	`user_id`
);

ALTER TABLE `Recipe` ADD CONSTRAINT `PK_RECIPE` PRIMARY KEY (
	`recipe_id`,
	`category_id`
);

ALTER TABLE `Clear_Cardinality` ADD CONSTRAINT `PK_CLEAR_CARDINALITY` PRIMARY KEY (
	`recipe_id`,
	`user_id`,
	`Ingredient_id`
);

ALTER TABLE `Profile_Favorite_Recipe` ADD CONSTRAINT `PK_PROFILE_FAVORITE_RECIPE` PRIMARY KEY (
	`recipe_id`,
	`profile_id`
);

ALTER TABLE `Ingredient` ADD CONSTRAINT `PK_INGREDIENT` PRIMARY KEY (
	`ingredient_id`
);

ALTER TABLE `Clear_Cardinality2` ADD CONSTRAINT `PK_CLEAR_CARDINALITY2` PRIMARY KEY (
	`recipe_id`,
	`ingredient_id`
);

ALTER TABLE `Chef` ADD CONSTRAINT `PK_CHEF` PRIMARY KEY (
	`recipe_id`,
	`chef_id`
);

ALTER TABLE `Profile_Score` ADD CONSTRAINT `PK_PROFILE_SCORE` PRIMARY KEY (
	`recipe_id`,
	`profile_id`
);

ALTER TABLE `Profile_Favorite_Ingredient` ADD CONSTRAINT `PK_PROFILE_FAVORITE_INGREDIENT` PRIMARY KEY (
	`ingredient_id`,
	`user_profile_id`
);

ALTER TABLE `Profile_Favorite_Category2` ADD CONSTRAINT `PK_PROFILE_FAVORITE_CATEGORY2` PRIMARY KEY (
	`category_id`,
	`profile_id`
);

ALTER TABLE `Profile_Favorite_Category` ADD CONSTRAINT `PK_PROFILE_FAVORITE_CATEGORY` PRIMARY KEY (
	`category_id`
);

ALTER TABLE `Ingredient_List` ADD CONSTRAINT `PK_INGREDIENT_LIST` PRIMARY KEY (
	`recipe_id`
);

ALTER TABLE `Recipe_Method` ADD CONSTRAINT `PK_RECIPE_METHOD` PRIMARY KEY (
	`recipe_id`
);

ALTER TABLE `Users_Profile` ADD CONSTRAINT `PK_USERS_PROFILE` PRIMARY KEY (
	`profile_id`,
	`user_id`
);

ALTER TABLE `Profile_Allergy` ADD CONSTRAINT `PK_PROFILE_ALLERGY` PRIMARY KEY (
	`ingredient_id`,
	`user_profile_id`
);

ALTER TABLE `Profile_Follow` ADD CONSTRAINT `PK_PROFILE_FOLLOW` PRIMARY KEY (
	`chef_id`,
	`user_id`
);

ALTER TABLE `Ingredient_Availble` ADD CONSTRAINT `FK_User_TO_Ingredient_Availble_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `User` (
	`user_id`
);

ALTER TABLE `Ingredient_Availble` ADD CONSTRAINT `FK_Ingredient_TO_Ingredient_Availble_1` FOREIGN KEY (
	`ingredient_id`
)
REFERENCES `Ingredient` (
	`ingredient_id`
);

ALTER TABLE `Recipe` ADD CONSTRAINT `FK_Profile_Favorite_Category_TO_Recipe_1` FOREIGN KEY (
	`category_id`
)
REFERENCES `Profile_Favorite_Category` (
	`category_id`
);

ALTER TABLE `Clear_Cardinality` ADD CONSTRAINT `FK_Recipe_TO_Clear_Cardinality_1` FOREIGN KEY (
	`recipe_id`
)
REFERENCES `Recipe` (
	`recipe_id`
);

ALTER TABLE `Clear_Cardinality` ADD CONSTRAINT `FK_Ingredient_Availble_TO_Clear_Cardinality_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `Ingredient_Availble` (
	`user_id`
);

ALTER TABLE `Clear_Cardinality` ADD CONSTRAINT `FK_Ingredient_Availble_TO_Clear_Cardinality_2` FOREIGN KEY (
	`Ingredient_id`
)
REFERENCES `Ingredient_Availble` (
	`ingredient_id`
);

ALTER TABLE `Profile_Favorite_Recipe` ADD CONSTRAINT `FK_Recipe_TO_Profile_Favorite_Recipe_1` FOREIGN KEY (
	`recipe_id`
)
REFERENCES `Recipe` (
	`recipe_id`
);

ALTER TABLE `Profile_Favorite_Recipe` ADD CONSTRAINT `FK_Users_Profile_TO_Profile_Favorite_Recipe_1` FOREIGN KEY (
	`profile_id`
)
REFERENCES `Users_Profile` (
	`profile_id`
);

ALTER TABLE `Clear_Cardinality2` ADD CONSTRAINT `FK_Recipe_TO_Clear_Cardinality2_1` FOREIGN KEY (
	`recipe_id`
)
REFERENCES `Recipe` (
	`recipe_id`
);

ALTER TABLE `Clear_Cardinality2` ADD CONSTRAINT `FK_Ingredient_TO_Clear_Cardinality2_1` FOREIGN KEY (
	`ingredient_id`
)
REFERENCES `Ingredient` (
	`ingredient_id`
);

ALTER TABLE `Chef` ADD CONSTRAINT `FK_Recipe_TO_Chef_1` FOREIGN KEY (
	`recipe_id`
)
REFERENCES `Recipe` (
	`recipe_id`
);

ALTER TABLE `Chef` ADD CONSTRAINT `FK_Users_Profile_TO_Chef_1` FOREIGN KEY (
	`chef_id`
)
REFERENCES `Users_Profile` (
	`profile_id`
);

ALTER TABLE `Profile_Score` ADD CONSTRAINT `FK_Recipe_TO_Profile_Score_1` FOREIGN KEY (
	`recipe_id`
)
REFERENCES `Recipe` (
	`recipe_id`
);

ALTER TABLE `Profile_Score` ADD CONSTRAINT `FK_Users_Profile_TO_Profile_Score_1` FOREIGN KEY (
	`profile_id`
)
REFERENCES `Users_Profile` (
	`profile_id`
);

ALTER TABLE `Profile_Favorite_Ingredient` ADD CONSTRAINT `FK_Ingredient_TO_Profile_Favorite_Ingredient_1` FOREIGN KEY (
	`ingredient_id`
)
REFERENCES `Ingredient` (
	`ingredient_id`
);

ALTER TABLE `Profile_Favorite_Ingredient` ADD CONSTRAINT `FK_Users_Profile_TO_Profile_Favorite_Ingredient_1` FOREIGN KEY (
	`user_profile_id`
)
REFERENCES `Users_Profile` (
	`profile_id`
);

ALTER TABLE `Profile_Favorite_Category2` ADD CONSTRAINT `FK_Profile_Favorite_Category_TO_Profile_Favorite_Category2_1` FOREIGN KEY (
	`category_id`
)
REFERENCES `Profile_Favorite_Category` (
	`category_id`
);

ALTER TABLE `Profile_Favorite_Category2` ADD CONSTRAINT `FK_Users_Profile_TO_Profile_Favorite_Category2_1` FOREIGN KEY (
	`profile_id`
)
REFERENCES `Users_Profile` (
	`profile_id`
);

ALTER TABLE `Ingredient_List` ADD CONSTRAINT `FK_Recipe_TO_Ingredient_List_1` FOREIGN KEY (
	`recipe_id`
)
REFERENCES `Recipe` (
	`recipe_id`
);

ALTER TABLE `Recipe_Method` ADD CONSTRAINT `FK_Recipe_TO_Recipe_Method_1` FOREIGN KEY (
	`recipe_id`
)
REFERENCES `Recipe` (
	`recipe_id`
);

ALTER TABLE `Users_Profile` ADD CONSTRAINT `FK_User_TO_Users_Profile_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `User` (
	`user_id`
);

ALTER TABLE `Profile_Allergy` ADD CONSTRAINT `FK_Ingredient_TO_Profile_Allergy_1` FOREIGN KEY (
	`ingredient_id`
)
REFERENCES `Ingredient` (
	`ingredient_id`
);

ALTER TABLE `Profile_Allergy` ADD CONSTRAINT `FK_Users_Profile_TO_Profile_Allergy_1` FOREIGN KEY (
	`user_profile_id`
)
REFERENCES `Users_Profile` (
	`profile_id`
);

ALTER TABLE `Profile_Follow` ADD CONSTRAINT `FK_Chef_TO_Profile_Follow_1` FOREIGN KEY (
	`chef_id`
)
REFERENCES `Chef` (
	`chef_id`
);

ALTER TABLE `Profile_Follow` ADD CONSTRAINT `FK_Users_Profile_TO_Profile_Follow_1` FOREIGN KEY (
	`user_id`
)
