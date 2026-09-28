import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function Services(): React.ReactElement {
  return (
    <section id="servicios" className="bg-white py-20 lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:items-start">
        <div>
          <p className="text-olive text-xs font-semibold tracking-[0.22em]">
            محصولات و خدمات
          </p>
          <h2 className="text-charcoal mt-3 max-w-xs text-3xl font-bold tracking-tight">
            راهکارهای مهندسی دقیق و ابزارهای آنالیزی
          </h2>
          <p className="text-muted mt-4 max-w-sm text-sm leading-6">
            ترکیب دانش متالورژی، ساخت قطعات خلأ بالا و تحلیل‌های پیشرفته جهت ارائه تجهیزات آزمایشگاهی و صنعتی استاندارد و پایدار.
          </p>
          <Button href="#contacto" variant="olive" className="mt-8">
            درخواست همکاری و سفارش
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {site.services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="flex flex-col items-center text-center"
              >
                <span className="bg-olive/10 text-olive inline-flex size-12 items-center justify-center rounded-full">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-charcoal mt-5 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-6">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
