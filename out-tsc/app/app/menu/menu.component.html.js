--Sidebar;
-- >
    /** @class */ (function () {
        function class_1() {
        }
        return class_1;
    }());
"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion";
id = "accordionSidebar" >
    --Sidebar - Brand-- >
    /** @class */ (function () {
        function class_2() {
        }
        return class_2;
    }());
"sidebar-brand d-flex align-items-center justify-content-center";
href = "index.html" >
    /** @class */ (function () {
        function class_3() {
        }
        return class_3;
    }());
"sidebar-brand-text mx-3" > {};
{
    TITULO;
}
/div>
    < /a>
    < !--Divider;
-- >
    /** @class */ (function () {
        function class_4() {
        }
        return class_4;
    }());
"sidebar-divider" >
    --Heading;
-- >
    /** @class */ (function () {
        function class_5() {
        }
        return class_5;
    }());
"sidebar-heading" >
    Menu
    < /div>
    < !--Nav;
Item - Pages;
Collapse;
Menu-- >
     * ngFor;
"let itemMenu of menu; let i = index;";
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"nav-item" >
    /** @class */ (function () {
        function class_6() {
        }
        return class_6;
    }());
"nav-link collapsed";
href = "#";
data - toggle;
"collapse";
attr.data - target;
"#collapse{{i}}";
aria - expanded;
"true";
attr.aria - controls;
"collapse{{i}}" >
    /** @class */ (function () {
        function class_7() {
        }
        return class_7;
    }());
"fas fa-fw fa-cog" > /i>
    < span > {};
{
    itemMenu.titulo;
}
/span>
    < /a>
    < div;
attr.id = "collapse{{i}}";
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"collapse";
attr.aria - labelledby;
"heading{{i}}";
data - parent;
"#accordionSidebar" >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"bg-white py-2 collapse-inner rounded" >
     * ngFor;
"let subMenuItem of itemMenu.itens" >
    /** @class */ (function () {
        function class_9() {
        }
        return class_9;
    }());
"collapse-item";
href = "{{subMenuItem.link}}" > {};
{
    subMenuItem.descricao;
}
/a>
    < /div>
    < /div>
    < /div>
    < /li>
    < !--Divider;
-- >
    /** @class */ (function () {
        function class_10() {
        }
        return class_10;
    }());
"sidebar-divider" >
    --Sidebar;
Toggler(Sidebar)-- >
    /** @class */ (function () {
        function class_11() {
        }
        return class_11;
    }());
"text-center d-none d-md-inline" >
    /** @class */ (function () {
        function class_12() {
        }
        return class_12;
    }());
"rounded-circle border-0";
id = "sidebarToggle" > /button>
    < /div>
    < /ul>
    < !--End;
of;
Sidebar-- >
;
//# sourceMappingURL=menu.component.html.js.map