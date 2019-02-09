// 修改一姬语音台词以及人物简介
if (game) {
  requestAnimationFrame(function autoRun() {
    try {
      const arrBackup = cfg.voice.sound.groups_
      if (!arrBackup || arrBackup.length === 0) {
        throw new Error()
      }
      console.log('Hacked语音')
      Object.entries(cfg.voice.sound.groups_).forEach(([soundID, soundGroup]) => {
				if (soundID == 1) {
					const changeMap = {
						吃: {
							words: '弃哒'
						},
						杠: {
							words: '康!'
						},
						碰: {
							words: '碰nya!'
						},
						获得语音: {
							words: '你好,初次见面,我教kaguramea,我系个女仆'
						},
						登录语音普通: {
							words: '你好,我很可爱~'
						},
						登录语音满羁绊: {
							words: '你好,我很可爱~'
						},
						大厅交互语音1: {
							words: '你好,我很可爱~'
						},
						大厅交互语音2: {
							words: '我很可爱~yeah~我很可爱~en~我是@%$#%'
						},
						大厅交互语音3: {
							words: '21岁,是homo(确信)'
						},
						大厅交互语音4: {
							words: 'money~~money~~money~~'
						},
						大厅交互语音5: {
							words: 	'喂,你对我有什么意见吗,有的话就快说啊!'
						},
						大厅交互语音6: {
							words: '早上好,主人,快点起来啦'
						},
						大厅交互语音7: {
							words: '我叫,我叫,我叫,我叫,kaguramea'
						},
						大厅交互语音8: {
							words: '( 脑 髓 吸 取 )'
						},
						送礼物语音普通: {
							words: '务必,please,please money'
						},
						送礼物语音喜好: {
							words: '请   给   我   钱'
						},
						好感度升级语音1: {
							words: '喂,你对我有什么意见吗,有的话就快说啊!'
						},
						好感度升级语音2: {
							words: '喂,你对我有什么意见吗,有的话就快说啊!'
						},
						好感度升级语音3: {
							words: '喂,你对我有什么意见吗,有的话就快说啊!'
						},
						好感度升级语音4: {
							words: '喂,你对我有什么意见吗,有的话就快说啊!'
						}
					}
        const keyArray = Object.keys(changeMap)
        soundGroup.forEach((soundObject, index) => {
          if (keyArray.includes(soundObject.name)) {
            soundGroup[index] = {
              ...soundObject,
              ...changeMap[soundObject.name]
            }
          }
        })
				}
			})
			console.log('Hacked简介')
			cfg.item_definition.character.rows_.forEach(chr =>{
				switch(chr.id){
					case 200001:
						// 字库不全
						chr.name = '神楽めあ'
						// 虽然左边不显示,但是右边有
						chr.desc_cv = '田中庄司'
						chr.desc = '日本Paryi Project的最初的VTB其中一人,设定是来自法国的军服女仆.在第一次直播时候就抛弃清楚并以「手〇」操作和混沌发言而在中国出名'
						chr.desc_age = '永远的1〇岁'
						chr.desc_birth = '8月2日'
						chr.desc_bloodtype = 'O型'
						chr.desc_hobby = '钱，迫害死宅'
						chr.desc_stature = '手〇'
				}
			})
			console.log('Hacked标签')
			ui.lobby.visitUI.uiView.child[2].child[6].child[0].child[0].child[1].child[0].props.text='特技: '
		} catch (error) {
			raf = requestAnimationFrame(autoRun)
		}
  })
}
