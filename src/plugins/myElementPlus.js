import {
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElFooter,
    ElMenu,
    ElSubmenu,
    ElMenuItemGroup,
    ElMenuItem,
    ElIcon
}
    from "element-plus"

import "element-plus/lib/theme-chalk/el-menu.css"
import "element-plus/lib/theme-chalk/el-submenu.css"
import "element-plus/lib/theme-chalk/el-menu-item.css"
import "element-plus/lib/theme-chalk/el-menu-item-group.css"
import "element-plus/lib/theme-chalk/el-icon.css"

export default function (app) {
    app.use(ElContainer);
    app.use(ElAside);
    app.use(ElHeader)
    app.use(ElMain)
    app.use(ElFooter)
    app.use(ElMenu)
    app.use(ElSubmenu)
    app.use(ElMenuItem)
    app.use(ElMenuItemGroup)
    app.use(ElIcon)
}