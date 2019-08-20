// 修改一姬语音台词以及人物简介
requestAnimationFrame(function autoRun() {
  try {
    const arrBackup = cfg.voice.sound.groups_
    if (!arrBackup || arrBackup.length === 0) {
      throw new Error();
    }
    console.log('Hacked语音文本');
    Object.entries(cfg.voice.sound.groups_).forEach(([soundID, soundGroup]) => {
      if (soundID == 1) {
        const changeMap = {
          "获得语音": {
            "words": '你好,初次见面,我教kaguramea,我系个女仆',
          },
          "登录语音普通": {
            "words": '你好,我很可爱~'
          },
          "登录语音满羁绊": {
            "words": '早上好,主人,快点起来啦'
          },
          "大厅交互语音1": {
            "words": '你好,我很可爱~'
          },
          "大厅交互语音2": {
            "words": '我很可爱~yeah~我很可爱~en~我是@%$#%'
          },
          "大厅交互语音3": {
            "words": '21岁,是homo(确信)'
          },
          "大厅交互语音4": {
            "words": 'money~~money~~money~~'
          },
          "大厅交互语音5": {
            "words": '喂,你对我有什么意见吗,有的话就快说啊!'
          },
          "大厅交互语音6": {
            "words": '早上好,主人,快点起来啦'
          },
          "大厅交互语音7": {
            "words": '|我叫,我叫,我叫,我叫,kaguramea'
          },
          "大厅交互语音8": {
            "words": '( 脑 髓 吸 取 )'
          },
          "送礼物语音普通": {
            "words": '务必,please,please money'
          },
          "送礼物语音喜好": {
            "words": '啊,感谢SC,最喜欢钱了'
          },
          "好感度升级语音1": {
            "words": '务必,please,please money'
          },
          "好感度升级语音2": {
            "words": 'money~~money~~money~~'
          },
          "好感度升级语音3": {
            "words": 'money~~money~~money~~'
          },
          "好感度升级语音4": {
            "words": 'money~~money~~money~~'
          }
        };
        soundGroup.forEach(soundObject => {
          soundObject.level_limit = 0;
          if (changeMap.hasOwnProperty(soundObject.name_chs)) {
            for (let [key, val] of Object.entries(changeMap[soundObject.name_chs])) {
              ['_chs', '_en', '_jp'].forEach(suffix => soundObject[key + suffix] = val)
            }
          }
        });
      }
    });
    console.log('Hacked简介文本');
    cfg.item_definition.character.rows_.forEach(chr => {
      const helper = (key, val) => {
        ['', '_chs', '_en', '_jp'].forEach(suffix => chr[key + suffix] = val)
      };
      switch (chr.id) {
        case 200001:
          chr.name = '神楽めあ';
          chr.name_chs = '神楽めあ';
          chr.name_en = 'Kagura Mea';
          chr.name_jp = '神楽めあ';
          helper('desc_cv', '田中庄司');
          helper('desc', '日本Paryi Project的最初的VTB其中一人,设定是来自法国的军服女仆.在第一次直播时候就抛弃清楚并以「手〇」操作和混沌发言而在中国出名,喜欢岭上开花但是从来没打出来过.\n(湊あくあ:めあ酱麻将很强)');
          helper('desc_age', '永远的1〇岁');
          helper('desc_birth', '8月2日');
          helper('desc_bloodtype', 'O');
          helper('desc_hobby', '钱，迫害死宅');
          helper('desc_stature', '157 cm (算上靴子)');
          break;
        case 200002:
          chr.name = '湊あくあ';
          chr.name_chs = '湊 阿夸';
          chr.name_en = 'Minato Aqua';
          chr.name_jp = '湊 あくあ';
          helper('desc_cv', '海王');
          helper('desc', '日本hololive所属,海之女仆.天然又狂气,擅长玩各种游戏,水平不俗但却非常冒失。\n(神楽めあ:这女人三麻和过大三元役满超强的)');
          helper('desc_age', '̶5̶岁̶');
          helper('desc_birth', '12月1日');
          helper('desc_bloodtype', '水');
          helper('desc_hobby', '可爱的事物、寿司和游戏');
          helper('desc_stature', '▇▇▇ cm');
          break;
      }
    });
  } catch (error) {
    raf = requestAnimationFrame(autoRun);
  }
});
(function () {
  console.log("加入开局语音及胡牌语音");
  const oldNewRoundplay = view.ActionNewRound.play;
  view.ActionNewRound.play = function (e) {
    if (view.DesktopMgr.Inst["player_datas"][view.DesktopMgr.Inst["seat"]]["character"]["charid"] === 200001)
      Laya.SoundManager.playSound("sound/game_start_200001.mp3", 1, {
        run: () => {}
      });
    return oldNewRoundplay.call(this, e)
  }
  const oldmehule = view.ViewPlayer_Me.prototype.HulePrepare;
  view.ViewPlayer_Me.prototype.HulePrepare = function (e, i, n) {
    if (view.DesktopMgr.Inst["current_step"] > 0 && view.DesktopMgr.Inst["player_datas"][view.DesktopMgr.Inst["seat"]]["character"]["charid"] === 200001)
      Laya.SoundManager.playSound("sound/hupai_200001.mp3", 1, {
        run: () => {}
      });
    return oldmehule.call(this, e, i, n)
  }
})();