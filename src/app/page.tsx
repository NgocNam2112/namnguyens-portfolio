import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <main className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl text-glow">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Built with Next.js, Tailwind CSS, and shadcn/ui components for a
              modern, accessible design system.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-1">
            <button className="cosmic-button">Get Started</button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl">
            <div className="p-6 border rounded-lg bg-card card-hover animate-fade-in-delay-2">
              <h3 className="text-lg font-semibold mb-2">Modern Design</h3>
              <p className="text-muted-foreground">
                Built with the latest design principles and accessibility
                standards.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-card card-hover animate-fade-in-delay-3">
              <h3 className="text-lg font-semibold mb-2">Type Safe</h3>
              <p className="text-muted-foreground">
                Full TypeScript support for better development experience.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-card card-hover animate-fade-in-delay-4">
              <h3 className="text-lg font-semibold mb-2">Responsive</h3>
              <p className="text-muted-foreground">
                Mobile-first design that works on all devices.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
