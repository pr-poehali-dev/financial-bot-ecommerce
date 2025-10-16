import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'bot'; text: string }>>([
    { role: 'bot', text: 'Привет! Я помогу вам управлять финансами. Попробуйте спросить о ваших расходах.' }
  ]);
  const [demoInput, setDemoInput] = useState('');

  const handleDemoMessage = () => {
    if (!demoInput.trim()) return;
    
    setMessages([...messages, 
      { role: 'user', text: demoInput },
      { role: 'bot', text: 'За последний месяц ваши расходы составили 45,000 ₽. Основные категории: продукты 15,000 ₽, транспорт 8,000 ₽, развлечения 12,000 ₽.' }
    ]);
    setDemoInput('');
  };

  const features = [
    {
      icon: 'Wallet',
      title: 'Автоматический учёт',
      description: 'Бот автоматически отслеживает все доходы и расходы'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика',
      description: 'Визуализация трат по категориям и периодам'
    },
    {
      icon: 'Bell',
      title: 'Уведомления',
      description: 'Напоминания о счетах и превышении бюджета'
    },
    {
      icon: 'Target',
      title: 'Цели',
      description: 'Установка финансовых целей и отслеживание прогресса'
    },
    {
      icon: 'PieChart',
      title: 'Отчёты',
      description: 'Подробные отчёты по вашим финансам'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Шифрование данных и защита персональной информации'
    }
  ];

  const faqs = [
    {
      question: 'Как бот отслеживает мои расходы?',
      answer: 'Бот интегрируется с вашими банковскими картами и автоматически категоризирует все транзакции. Вы также можете вручную добавлять расходы через чат.'
    },
    {
      question: 'Безопасны ли мои финансовые данные?',
      answer: 'Да, мы используем банковское шифрование и не храним данные ваших карт. Вся информация защищена и соответствует стандартам PCI DSS.'
    },
    {
      question: 'Можно ли использовать бота бесплатно?',
      answer: 'Да, базовый функционал доступен бесплатно. Премиум-версия с расширенной аналитикой и дополнительными функциями стоит 299 ₽/месяц.'
    },
    {
      question: 'На каких платформах работает бот?',
      answer: 'Бот доступен в Telegram, WhatsApp и как веб-приложение. Все данные синхронизируются между платформами.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Wallet" size={28} className="text-primary" />
            <span className="text-xl font-bold">FinanceBot</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#demo" className="text-sm font-medium hover:text-primary transition-colors">Демо</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </div>
          <Button>Попробовать бесплатно</Button>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Управляйте финансами легко
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              ИИ-помощник для автоматического учёта доходов и расходов. Контролируйте бюджет через простой чат.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Начать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
          <div className="animate-slide-up">
            <img 
              src="https://cdn.poehali.dev/projects/1199d2e2-ccd6-4344-867d-98477ffddfd3/files/27c345cf-a642-4aa1-b452-3e8f7d58b9ed.jpg" 
              alt="Финансовая аналитика" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section id="demo" className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Попробуйте прямо сейчас</h2>
            <p className="text-muted-foreground">Задайте вопрос боту и посмотрите, как он работает</p>
          </div>
          
          <Card className="shadow-xl">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="flex items-center gap-2">
                <Icon name="MessageSquare" size={24} />
                Демо-версия бота
              </CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Интерактивный пример работы с финансовым ботом
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 mb-4 min-h-[300px] max-h-[400px] overflow-y-auto">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}>
                    <div className={`max-w-[80%] rounded-lg px-4 py-3 ${
                      msg.role === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-foreground'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  value={demoInput}
                  onChange={(e) => setDemoInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleDemoMessage()}
                  placeholder="Сколько я потратил в этом месяце?"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button onClick={handleDemoMessage}>
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Возможности бота</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Полный набор инструментов для управления личными финансами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground">Ответы на популярные вопросы о боте</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к 10,000+ пользователей, которые уже контролируют свои финансы
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Попробовать бесплатно
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wallet" size={24} className="text-primary" />
                <span className="font-bold">FinanceBot</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ваш умный помощник в управлении финансами
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary">Возможности</a></li>
                <li><a href="#demo" className="hover:text-primary">Демо</a></li>
                <li><a href="#" className="hover:text-primary">Цены</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
                <li><a href="#" className="hover:text-primary">Контакты</a></li>
                <li><a href="#" className="hover:text-primary">Документация</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">О нас</a></li>
                <li><a href="#" className="hover:text-primary">Блог</a></li>
                <li><a href="#" className="hover:text-primary">Вакансии</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 FinanceBot. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;