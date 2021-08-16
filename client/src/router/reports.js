import ReportsViews from '../views/ReportsView.vue'
import ProductsReports from '../components/admin/ProductsReports.vue'

module.export [
    {path: 'reports', name: 'reports', component: ReportsViews,
        children: [

            { path: 'products', name: 'productsReports', component: ProductsReports}

        ]
    }
]