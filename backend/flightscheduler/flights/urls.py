from django.urls import path,include
from . import views


from django.conf.urls import url

# router=routers.DefaultRouter()
# router.register(r'users',views.UserViewSet)


urlpatterns=[
# # path("",views.index,name="index")
# path("",include(router.urls))
path('',views.flight_list),
path('<int:pk>',views.delDep),
path('api/',views.emp_list),
path('api/<int:pk>',views.del_emp),
path('deplist',views.dep_list),


]  

