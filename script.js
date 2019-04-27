// 修改一姬语音台词以及人物简介
if (game) {
	requestAnimationFrame(function autoRun() {
		try {
			let arrBackup = cfg.voice.sound.groups_
			if (!arrBackup || arrBackup.length === 0) {
				throw new Error()
			}
			console.log('Hacked语音文本');
			let soundGroup = arrBackup[1];
			let changeMap = {
				"获得语音": {
					"words_chs": '你好,初次见面,我教kaguramea,我系个女仆',
				},
				"登录语音普通": {
					"words_chs": '你好,我很可爱~'
				},
				"登录语音满羁绊": {
					"words_chs": '早上好,主人,快点起来啦'
				},
				"大厅交互语音1": {
					"words_chs": '你好,我很可爱~'
				},
				"大厅交互语音2": {
					"words_chs": '我叫,我叫,我叫,我叫,kaguramea'
				},
				"大厅交互语音3": {
					"words_chs": 'money~~money~~money~~'
				},
				"大厅交互语音4": {
					"words_chs": '21岁,是homo(确信)'
				},
				"大厅交互语音5": {
					"words_chs": '我很可爱~yeah~我很可爱~en~我是@%$#%'
				},
				"大厅交互语音6": {
					"words_chs": '早上好,主人,快点起来啦'
				},
				"大厅交互语音7": {
					"words_chs": '( 脑 髓 吸 取 )'
				},
				"大厅交互语音8": {
					"words_chs": '喂,你对我有什么意见吗,有的话就快说啊!'
				},
				"送礼物语音普通": {
					"words_chs": '务必,please,please money'
				},
				"送礼物语音喜好": {
					"words_chs": '请    给    我    钱'
				},
				"好感度升级语音1": {
					"words_chs": '务必,please,please money'
				},
				"好感度升级语音2": {
					"words_chs": 'money~~money~~money~~'
				},
				"好感度升级语音3": {
					"words_chs": 'money~~money~~money~~'
				},
				"好感度升级语音4": {
					"words_chs": 'money~~money~~money~~'
				}
			};
			let keyArray = Object.keys(changeMap)
			soundGroup.forEach((soundObject, index) => {
				if (keyArray.includes(soundObject.name_chs)) {
					soundGroup[index]["words_chs"] = soundGroup[index]["words_en"] = soundGroup[index]["words_jp"] = changeMap[soundObject.name_chs]["words_chs"];
				}
			});
			console.log('Hacked简介文本');
			cfg.item_definition.character.rows_.forEach(chr => {
				switch (chr.id) {
					case 200001:
						chr.name = '神楽めあ'
						chr.name_chs = '神楽めあ'
						chr.name_en = 'Kagura Mea'
						chr.name_jp = '神楽めあ'
						chr.desc_cv_jp = chr.desc_cv_en = chr.desc_cv_chs = '田中庄司'
						chr.desc_jp = chr.desc_en = chr.desc_chs = '日本Paryi Project的最初的VTB其中一人,设定是来自法国的军服女仆.在第一次直播时候就抛弃清楚并以「手〇」操作和混沌发言而在中国出名,喜欢岭上开花但是从来没打出来过.\n(湊あくあ:めあ酱麻将很强)'
						chr.desc_age_jp = chr.desc_age_en = chr.desc_age_chs = '永远的1〇岁'
						chr.desc_birth_jp = chr.desc_birth_en = chr.desc_birth_chs = '8月2日'
						chr.desc_bloodtype = 'O'
						chr.desc_hobby_jp = chr.desc_hobby_en = chr.desc_hobby_chs = '钱，迫害死宅'
						chr.desc_stature_jp = chr.desc_stature_en = chr.desc_stature_chs = '157 cm（算上靴子）'
						break;
					case 200002:
						chr.name = '湊あくあ'
						chr.name_chs = '湊 阿夸'
						chr.name_en = 'Minato Aqua'
						chr.name_jp = '湊 あくあ'
						chr.desc_cv_jp = chr.desc_cv_en = chr.desc_cv_chs = '海王'
						chr.desc_jp = chr.desc_en = chr.desc_chs = '日本hololive所属,海之女仆.天然又狂气,擅长玩各种游戏,水平不俗但却非常冒失。\n(神楽めあ:这女人三麻和过大三元役满超强的)'
						chr.desc_age_jp = chr.desc_age_en = chr.desc_age_chs = '̶5̶岁̶'
						chr.desc_birth_jp = chr.desc_birth_en = chr.desc_birth_chs = '12月1日'
						chr.desc_bloodtype = '水'
						chr.desc_hobby_jp = chr.desc_hobby_en = chr.desc_hobby_chs = '可爱的事物、寿司和游戏'
						chr.desc_stature_jp = chr.desc_stature_en = chr.desc_stature_chs = '000 cm'
						break;
				}
			})
		} catch (error) {
			raf = requestAnimationFrame(autoRun)
		}
	})
}
