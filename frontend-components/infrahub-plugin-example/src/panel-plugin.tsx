import type { PluginComponentProps, PluginManifest } from "@infrahub/plugin-sdk";

/**
 * Example panel plugin that shows quick stats about an object
 */
export const manifest: PluginManifest = {
  id: "example-quick-stats",
  name: "Quick Stats",
  kinds: ["DcimDevice"],
  position: "panel",
  panelTitle: "Quick Stats",
  icon: "mdi:chart-bar",
  priority: 5,
};

// Type for standard object details data
interface ObjectDetailsData {
  id: string;
  display_label: string;
  name?: { value: string };
  description?: { value: string | null };
  [key: string]: unknown;
}

export default function QuickStatsPlugin({
  object,
  schema,
  objectData,
}: PluginComponentProps<unknown, ObjectDetailsData>) {
  const attributeCount = schema.attributes?.length ?? 0;
  const relationshipCount = schema.relationships?.length ?? 0;

  // Access the full object details data
  const deviceName = objectData?.name?.value ?? object.displayLabel;
  const description = objectData?.description?.value;

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-blue-600">{attributeCount}</div>
          <div className="text-xs text-gray-500">Attributes</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">{relationshipCount}</div>
          <div className="text-xs text-gray-500">Relationships</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-purple-600">
            {object.id?.slice(0, 8) ?? "N/A"}
          </div>
          <div className="text-xs text-gray-500">ID (short) hello Bilal</div>
        </div>
      </div>
      {description && (
        <div className="text-gray-600 text-sm border-gray-200 border-t pt-2">
          <span className="font-medium">{deviceName}:</span> {description}
        </div>
      )}
    </div>
  );
}
