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

export const mes_receitas = [
    {mes: "Jan", receita: "45000", despesas: "33000"},
    {mes: "Fev", receita: "55000", despesas: "37000"},
    {mes: "Mar", receita: "48000", despesas: "35000"},
    {mes: "Abr", receita: "62000", despesas: "43000"},
    {mes: "Mai", receita: "55000", despesas: "41000"},
    {mes: "Juh", receita: "66000", despesas: "45000"},
    {mes: "Jul", receita: "73000", despesas: "47000"},
    {mes: "Ago", receita: "69000", despesas: "46000"},
    {mes: "Set", receita: "78000", despesas: "52000"},
    {mes: "Out", receita: "75000", despesas: "50000"},
    {mes: "Nov", receita: "83000", despesas: "56000"},
    {mes: "Dez", receita: "90000", despesas: "58000"},
]

export const vendas_data = [
    { name: "Eletronicos", value: 55, fill: "#3b82f6" },
    { name: "Vestuario", value: 40, fill: "#8b5cf6" },
    { name: "Livros", value: 25, fill: "#10b981" },
    { name: "Outros", value: 20, fill: "#f59e0b" },
]
