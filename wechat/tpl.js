'use strict'

var ejs = require('ejs')
var heredoc = require('heredoc')

var tpl = heredoc(function() {/*
  <xml>
  <ToUserName><![CDATA[<% fromUserName %>]]></ToUserName>
  <FromUserName><![CDATA[<% toUserName %>]]></FromUserName>
  <CreateTime><% createTime %></CreateTime>
  <MsgType><![CDATA[<% responseType %>]]></MsgType>
  <% if (responseType === 'text') { %>
    <Content><![CDATA[content]]></Content>
  <% } else if (responseType === 'news') { %>
  <ArticleCount><% content.length %></ArticleCount>
  <Articles>
    <% content.forEach(function(item) { %>
      <item>
        <Title><![CDATA[<% item.title %>]]></Title> 
        <Description><![CDATA[<% item.description1 %>]]></Description>
        <PicUrl><![CDATA[<% item.picurl %>]]></PicUrl>
        <Url><![CDATA[<% item.url %>]]></Url>
      </item>
    <% }) %>
  </Articles>
  <% } else { %>
  <% } %>
  </xml>
*/})

var compiled = ejs.compile(tpl)

exports = module.exports = {
  compiled: compiled
}