from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG = True

ALLOWED_HOSTS = ['*']

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'HOST': '127.0.0.1',
#         'NAME': 'test_2',
#         'USER': 'root',
#         'PASSWORD': 'siridog',
#         'PORT': '5431',
#     }
# }

# webpack integration
MANIFEST_LOADER = {
    'manifest_file': Path(BASE_DIR, 'build', 'manifest.dev.json'),
    'cache': not DEBUG
}
