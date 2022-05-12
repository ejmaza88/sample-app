import json

from django import template
from django.utils.safestring import mark_safe

register = template.Library()


@register.filter()
def js_data(data):
    result = '<script>window.JS_DATA = %s</script>' % json.dumps(data)
    return mark_safe(result)