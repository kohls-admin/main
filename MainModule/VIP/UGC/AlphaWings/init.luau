if game:GetService("RunService"):IsClient() then
	return false
end

local InsertService = game:GetService("InsertService")

local hat = Instance.new("Accessory")
hat.Name = "_KAlphaWings"
hat:AddTag("_KAlphaWings")

local handle = InsertService:CreateMeshPartAsync(
	"rbxassetid://135389107063517",
	Enum.CollisionFidelity.Box,
	Enum.RenderFidelity.Automatic
)
handle:AddTag("_KAlphaWings")
handle.Parent = hat
handle.Name = "Handle"
handle.Color = Color3.fromRGB(170, 170, 170)
handle.CastShadow = false
handle.CanCollide = false
handle.CanQuery = false
handle.CanTouch = false
handle.Massless = true
handle.Locked = true
handle.Material = Enum.Material.Neon

local Bones = script:WaitForChild("Bones")
for _, bone in Bones:GetChildren() do
	bone.Parent = handle
end

script:WaitForChild("Animate").Parent = handle

local attachment = Instance.new("Attachment", handle)
attachment.Position = Vector3.new(0, 3, -1)
attachment.Name = "BodyBackAttachment"

return {
	Name = hat.Name,
	MatchId = "rbxassetid://89119211625300",
	Method = function(character: Model, accessory: Accessory)
		local dark
		if accessory then
			dark = string.find(string.lower(accessory.Name), "dark")
			accessory:Destroy()
		end
		local existing = character:FindFirstChild(hat.Name)
		if existing then
			existing:Destroy()
		end
		local clone = hat:Clone()
		if dark then
			clone.Handle.Color = Color3.new()
		end
		clone.Parent = character
		clone.Handle.Animate.Enabled = true

		return clone
	end,
}
