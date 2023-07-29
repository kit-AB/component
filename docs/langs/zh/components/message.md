---
title: Message
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/message/description/zh-props.ts";
  import slots from "../../../example/message/description/zh-slots.ts";
</script>

# Message 消息提示
常用于主动操作后的反馈提示。

## 基础用法
<demo src="../../../example/message/base.vue"></demo>

## 不同状态
用来显示「成功、警告、消息、危险(错误)」类的操作反馈。
<demo src="../../../example/message/type.vue"></demo>

## 关闭时间
自动关闭的延时，单位毫秒，不关闭可以写 0。
<demo src="../../../example/message/time.vue"></demo>

## 手动关闭

显示关闭按钮
<demo src="../../../example/message/close.vue"></demo>

## 关闭logo

<demo src="../../../example/message/icon.vue"></demo>

## 属性

<table-block type="propsZh" :data="props"></table-block>