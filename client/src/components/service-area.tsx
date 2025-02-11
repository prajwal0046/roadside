import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface ServiceArea {
  city: string;
  response: string;
}

export default function ServiceArea() {
  const { data, isLoading } = useQuery<{ serviceArea: ServiceArea[] }>({
    queryKey: ["/api/service-area"],
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Service Area</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 bg-muted rounded" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Area & Response Times</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data?.serviceArea.map((area) => (
            <div key={area.city} className="flex items-center justify-between p-2 hover:bg-muted rounded-lg">
              <span className="font-medium">{area.city}</span>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-2 h-4 w-4" />
                {area.response}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
