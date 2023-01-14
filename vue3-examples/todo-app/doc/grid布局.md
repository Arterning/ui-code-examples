# CSS Grid 布局是二维布局

可以同时控制行和列的排布

```

.grid {
    display : grid;

    //设置三列 每列是100px
    grid-template-columns: 100px 100px 100px;

    //设置浮动宽度 三列各占三分之一
    grid-template-columns: 1fr 1fr 1fr;

    //给column设置间距
    column-gaps: 24px;

    //设置rows行间距
    row-gaps: 24px;

    //同时设置column间距和行间距
    gap: 30px;


    //上下对齐子元素 居中对齐center 靠下对齐end
    align-items: center;

    //左右对齐子元素
    justify-items: center;

    //对整个grid进行上下对齐
    align-content: center;

    //对整个grid进行左右对齐
    justify-content: center;




}

```

# 排列元素

```
<div class="layout">
    <header></header>
    <sidebar></sidebar>
    <content></content>
    <footer></footer>
</div>

.grid {
    display: grid;
    grid-template-areas: "header header header sidebar content content footer footer footer";
}

header {
    grid-area: header;
}

sidebar {
    grid-area: sidebar;
}

content {
    grid-area: content;
}

footer {
    grid-area: footer;
}
```

# 所有布局方式回顾

1. display: relative
2. display: absolute
3. display: sticky
4. display: fixed
