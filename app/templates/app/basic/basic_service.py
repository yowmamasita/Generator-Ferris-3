from protorpc import messages
from ferris3 import auto_class, auto_method, Service


class BasicMessage(messages.Message):
    content = messages.StringField(1)


@auto_class
class BasicService(Service):

    @auto_method(returns=BasicMessage)
    def get(self, request):
        return BasicMessage(content="Hello, Ferris!")
