#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')
    , credits     = require('./credits')
    , menu        = require('./exercises_zh-cn/menu')

    , name        = 'learnyounode'
    , title       = 'LEARN YOU THE NODE.JS FOR MUCH WIN!'
    , subtitle    = '\x1b[23m选择一个练习，按 \x1b[3m回车\x1b[23m开始'


function fpath (f) {
  return path.join(__dirname, f)
}


workshopper({
    name        : name
  , title       : title
  , subtitle    : subtitle
  , exerciseDir : fpath('./exercises_zh-cn/')
  , appDir      : __dirname
  , helpFile    : fpath('help_zh-cn.txt')
  , menuItems   : [ {
        name    : 'credits'
      , handler : credits
    } ]
})
