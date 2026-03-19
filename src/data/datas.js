import { 
    BarChart3, 
    Calendar, 
    CreditCard, 
    DollarSign, 
    Eye, 
    FileText, 
    LayoutDashboard, 
    MessageSquare, 
    Package, 
    Settings, 
    ShoppingBag, 
    ShoppingCart, 
    Users, 
    Users2
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

export const estados = [
    {
        title: "Total Reveneu",
        value: "$234,456",
        change: "+15,5%",
        trend: "up",
        icon: DollarSign,
        color: "from-emerald-500 to-teal-600",
        bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
        textColor: "text-emeral-600 dark:text-emerald-400"
    },
    {
        title: "Active Users",
        value: "8,456",
        change: "+7,5%",
        trend: "up",
        icon: Users2,
        color: "from-blue-500 to-indigo-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        textColor: "text-blue-600 dark:text-blue-400"
    },
    {
        title: "Total Orders",
        value: "2,456",
        change: "+15,4%",
        trend: "up",
        icon: ShoppingCart,
        color: "from-purple-500 to-pink-600",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
        textColor: "text-purple-600 dark:text-purple-400"
    },
    {
        title: "Pages Views",
        value: "34,456",
        change: "-3,4%",
        trend: "down",
        icon: Eye,
        color: "from-orange-500 to-red-600",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
        textColor: "text-orange-600 dark:text-orange-400"
    },
]

export const month_data =[
    {month: "Jan", reveneu: "45000", expenses: "33000"},
    {month: "Fev", reveneu: "55000", expenses: "37000"},
    {month: "Mar", reveneu: "48000", expenses: "35000"},
    {month: "Abr", reveneu: "62000", expenses: "43000"},
    {month: "Mai", reveneu: "55000", expenses: "41000"},
    {month: "Juh", reveneu: "66000", expenses: "45000"},
    {month: "Jul", reveneu: "73000", expenses: "47000"},
    {month: "Ago", reveneu: "69000", expenses: "46000"},
    {month: "Set", reveneu: "78000", expenses: "52000"},
    {month: "Out", reveneu: "75000", expenses: "50000"},
    {month: "Nov", reveneu: "83000", expenses: "56000"},
    {month: "Dez", reveneu: "90000", expenses: "58000"},
]
