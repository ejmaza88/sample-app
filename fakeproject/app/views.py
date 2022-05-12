from django.shortcuts import render

def home(request):

    context = {
        'init_js_data': {
            'message': 'Hello World'
        }
    }

    return render(request, 'app/home.html', context)
