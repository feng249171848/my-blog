import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import SigleBlog from './components/SigleBlog'
import EditBlog from './components/EditBlog'

export default[
  {path:"/",component:ShowBlogs},
  {path:"/add",component:AddBlog},
  {path:"/blog/:id",component:SigleBlog},
  {path:"/edit/:id",component:EditBlog}
]