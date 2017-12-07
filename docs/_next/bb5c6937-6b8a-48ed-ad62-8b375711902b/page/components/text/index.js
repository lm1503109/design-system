
          window.__NEXT_REGISTER_PAGE('/components/text', function() {
            var comp = module.exports=webpackJsonp([25],{1175:function(e,t,n){e.exports=n(1176)},1176:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(l);Object.defineProperty(t,"__esModule",{value:!0});var s=n(80),m=a(s),r=n(1),u=(a(r),n(95)),d=a(u),o=n(25),c=a(o),p=n(13);t.default=(0,p.withServerProps)(function(e){return i.default.createElement(p.Chrome,null,i.default.createElement(p.Content,{title:"Text"},i.default.createElement(p.PageHeading,{packageName:"text"},"Text"),i.default.createElement(p.P,null,"Install the component dependency:"),i.default.createElement(p.Code,{language:"bash"},"npm install @pluralsight/ps-design-system-text"),i.default.createElement(p.P,null,"Include a React component in your project:"),i.default.createElement(p.Code,{language:"javascript"},"import * as Text from '@pluralsight/ps-design-system-text/react'"),i.default.createElement(p.SectionHeading,null,"Heading"),i.default.createElement(p.P,null,"Heading styles compose complimentary typography attributes for simplified implementation. Try to use common heading styles when possible."),i.default.createElement(p.Example.React,{orient:"vertical",includes:{Text:d.default},codes:(0,m.default)(d.default.Heading.sizes).map(function(e){return"\n<Text.Heading size={Text.Heading.sizes."+e+"}>\n  <h2>"+e+"</h2>\n</Text.Heading>\n"})}),i.default.createElement(p.PropTypes,{title:"Text.Heading PropTypes",props:[p.PropTypes.row(["size",p.PropTypes.union(d.default.Heading.sizes),null,i.default.createElement("code",null,"large"),i.default.createElement("span",null,"size and style of heading (from ",i.default.createElement("code",null,"Text.Heading.sizes"),")")])]}),i.default.createElement(p.SectionHeading,null,"Body text"),i.default.createElement(p.P,null,"Try to use common paragraph style when possible."),i.default.createElement(p.Example.React,{includes:{Text:d.default},codes:["\n<Text.P>\n  Paragraph - Lorem ipsum dolor sit amet adipisicing elit, sed do\n  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n  minim veniam, quis nostrud exercitation nisi ut aliquip ex ea commodo\n  consequat.Lorem ipsum dolor sit amet consectetur adipisicing elit, sed\n  do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n</Text.P>\n      "],orient:"vertical"}),i.default.createElement(p.SectionHeading,null,"List"),i.default.createElement(p.P,null,"Nothing fancy, just simple lists. You’ll know when you need them."),i.default.createElement(p.Example.React,{includes:{Text:d.default},codes:["\n<Text.List>\n  <Text.List.Item>apple</Text.List.Item>\n  <Text.List.Item>orange</Text.List.Item>\n  <Text.List.Item>banana</Text.List.Item>\n  <Text.List.Item>strawberry</Text.List.Item>\n  <Text.List.Item>papaya</Text.List.Item>\n</Text.List>\n",'\n<Text.List type="bulleted">\n  <Text.List.Item>apple</Text.List.Item>\n  <Text.List.Item>orange</Text.List.Item>\n  <Text.List.Item>banana</Text.List.Item>\n  <Text.List.Item>strawberry</Text.List.Item>\n  <Text.List.Item>papaya</Text.List.Item>\n</Text.List>\n','\n<Text.List type="numbered">\n  <Text.List.Item>apple</Text.List.Item>\n  <Text.List.Item>orange</Text.List.Item>\n  <Text.List.Item>banana</Text.List.Item>\n  <Text.List.Item>strawberry</Text.List.Item>\n  <Text.List.Item>papaya</Text.List.Item>\n</Text.List>\n']}),i.default.createElement(p.PropTypes,{title:"Text.List PropTypes",props:[p.PropTypes.row(["type",p.PropTypes.union(d.default.List.types),null,i.default.createElement("code",null,"default"),i.default.createElement("span",null,"semantics and bullet styles (from ",i.default.createElement("code",null,"Text.list.types"),")")])]}),i.default.createElement(p.SectionHeading,null,"Light theme"),i.default.createElement(p.P,null,"To specify the light theme, wrap your components in a ",i.default.createElement("code",null,"Theme")," ","componet."),i.default.createElement(p.Example.React,{orient:"vertical",includes:{P:p.P,Text:d.default,Theme:c.default},codes:['\n<Theme name={Theme.names.light}>\n  <div>\n    <P>Some text on light background.</P>\n    <Text.Heading size={Text.Heading.sizes.xLarge}>\n      <h2>Heading XL - Light</h2>\n    </Text.Heading>\n    <Text.List type="numbered">\n      <Text.List.Item>apple</Text.List.Item>\n      <Text.List.Item>orange</Text.List.Item>\n      <Text.List.Item>banana</Text.List.Item>\n    </Text.List>\n  </div>\n</Theme>\n'],themeName:c.default.names.light})))})}},[1175]);
            return { page: comp.default }
          })
        