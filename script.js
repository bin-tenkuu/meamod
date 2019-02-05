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
							words: '婆nya!'
						},
						获得语音: {
							words: '你好,我很可爱~'
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
							words: '早上好'
						},
						大厅交互语音3: {
							words: '你好,我很可爱~'
						},
						大厅交互语音4: {
							words: 'money~~money~~money~~'
						},
						大厅交互语音5: {
							words: 	'喂,你对我有什么意见吗,有的话就快说啊!'
						},
						大厅交互语音6: {
							words: '早上好'
						},
						大厅交互语音7: {
							words: '我加,我加,我加,我加,kaguramea'
						},
						大厅交互语音8: {
							words: '喂,你对我有什么意见吗,有的话就快说啊!'
						},
						送礼物语音普通: {
							words: '务必 plz plz money'
						},
						送礼物语音喜好: {
							words: '请给我钱'
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
			//console.log('Hacked简介暂时未完成')
			//这个就是改不了
			//cfg.item_definition.character.map_[200001].desc = '出现在paryi project的最初的VTB其中一人，现任异常的懒，虽然是杂鱼体力，但很坚定的声称自己是女仆。对于她而言，没有什么事情比摸鱼和上厕所更为重要。'
			//cfg.item_definition.character.map_[200001].name = '神楽めあ'
		} catch (error) {
			raf = requestAnimationFrame(autoRun)
		}
  })
}
