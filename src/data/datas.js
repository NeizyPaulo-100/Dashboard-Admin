import { 
    BarChart3, 
    Calendar, 
    CreditCard, 
    FileText, 
    LayoutDashboard, 
    MessageSquare, 
    Package, 
    Settings, 
    ShoppingBag, 
    Users 
} from "lucide-react";

export const menu_items = [
    {
        id: "dashboard",
        icon: LayoutDashboard,
        label: "Dashboard",
        active: true,
        badge: "New",
    },
    {
        id: "analytics",
        icon: BarChart3,
        label: "Analytics",
        sub_menu: [
            { id: "overview", label: "Overview" },
            { id: "reports", label: "Reports" },
            { id: "insights", label: "Insights" },
        ],
    },
    {
        id: "users",
        icon: Users,
        label: "Users",
        sub_menu: [
            { id: "all_users", label: "All users" },
            { id: "roles", label: "Roles e permissions" },
            { id: "activity", label: "User activity" },
        ],
        count: "5.2k"
    },
    {
        id: "ecommerce",
        icon: ShoppingBag,
        label: "E-commerce",
        sub_menu: [
            { id: "products", label: "products" },
            { id: "orders", label: "Orders" },
            { id: "customers", label: "Customers" },
        ],
    },
    {
        id: "inventory",
        icon: Package,
        label: "Inventory",
        count: "206",
    },
    {
        id: "trasantions",
        icon: CreditCard,
        label: "Trasantions",
    },
    {
        id: "messages",
        icon: MessageSquare,
        label: "Messages",
        badge: "18",
    },
    {
        id: "calendar",
        icon: Calendar,
        label: "Calendar",
    },
    {
        id: "reposts",
        icon: FileText,
        label: "Reports",
    },
    {
        id: "settings",
        icon: Settings,
        label: "Settings",
    },
]
