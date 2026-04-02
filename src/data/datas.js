import { 
    BarChart3, 
    Bell, 
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
    User, 
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

export const ordens_recentes = [
    {
        id: "A333",
        cliente: "Luis Muhele",
        produto: "MackBook Pro 16",
        preco: "$2,400",
        estado: "completo",
        data: "2025-05-10"
    },
    {
        id: "A334",
        cliente: "Adelino Emiliano",
        produto: "IPhone Pro Max 16",
        preco: "$1,200",
        estado: "pedido",
        data: "2025-04-10"
    },
    {
        id: "A335",
        cliente: "Mingo da Silva",
        produto: "MackBook Pro 14",
        preco: "$1,400",
        estado: "pedido",
        data: "2025-05-10"
    },
    {
        id: "A336",
        cliente: "Noé Paulo",
        produto: "Samsung S24",
        preco: "$1,000",
        estado: "completo",
        data: "2025-05-10"
    },
    {
        id: "A337",
        cliente: "Mateu Nando",
        produto: "IPad Pro 16",
        preco: "$1,300",
        estado: "cancelado",
        data: "2025-05-10"
    },
    {
        id: "A338",
        cliente: "Maura de Carvalho",
        produto: "MackBook Pro 16",
        preco: "$2,400",
        estado: "cancelado",
        data: "2025-05-10"
    },
]

export const melhores_produtos = [
    {
        nome: "IPhone Pro Max 16",
        venda: "2173",
        receita: "$4,590,033",
        tendencia: "Up",
        troca: "+15%"
    },
    {
        nome: "IPhone Pro Max 16",
        venda: "2173",
        receita: "$4,590,033",
        tendencia: "Down",
        troca: "+9%"
    },
    {
        nome: "Samsung S16",
        venda: "2173",
        receita: "$4,590,033",
        tendencia: "Up",
        troca: "+10%"
    },
    {
        nome: "Dell th300",
        venda: "2173",
        receita: "$4,590,033",
        tendencia: "Up",
        troca: "+19%"
    },
]

export const atividades = [
    {
        id: "1",
        type: "user",
        icon: User,
        title: "Novo usuario registado",
        descricao: "Jão Mauricio criou uma conta",
        tempo: "há 3 minutos",
        color: "text-blue-500",
        bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
        id: "2",
        type: "ordem",
        icon: ShoppingCart,
        title: "Novo Compra recebida",
        descricao: "Compra A338 por $1,799",
        tempo: "há 7 minutos",
        color: "text-emerald-500",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
        id: "3",
        type: "user",
        icon: User,
        title: "Novo usuario registado",
        descricao: "Jão Mauricio criou uma conta",
        tempo: "3 há minutos",
        color: "text-blue-500",
        bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
        id: "4",
        type: "notificacao",
        icon: Bell,
        title: "Verifica o Stock",
        descricao: "O Stock do Samsung S14 está baixo",
        tempo: "há 8 minutos",
        color: "text-red-500",
        bgColor: "bg-red-100 dark:bg-red-900/30"
    },
    {
        id: "5",
        type: "user",
        icon: User,
        title: "Novo usuario registado",
        descricao: "Jão Mauricio criou uma conta",
        tempo: "3 há minutos",
        color: "text-blue-500",
        bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
]
