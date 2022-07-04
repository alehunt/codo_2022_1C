from django.shortcuts import redirect

def index_redirect(request):
    return  redirect('/crud/')