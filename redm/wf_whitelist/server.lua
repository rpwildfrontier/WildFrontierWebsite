-- Wild Frontier RP — Whitelist script
-- Interroge le site web pour récupérer la liste des joueurs autorisés.
-- Placer ce fichier dans resources/wf_whitelist/server.lua
-- Ajouter dans server.cfg : ensure wf_whitelist

local WHITELIST_URL    = GetConvar('wf_whitelist_url',    '')
local WHITELIST_SECRET = GetConvar('wf_whitelist_secret', '')

local whitelist   = {}
local lastRefresh = 0
local REFRESH_TTL = 60  -- secondes entre chaque rechargement

local function fetchWhitelist(cb)
  if WHITELIST_URL == '' then
    print('^3[wf_whitelist] wf_whitelist_url non configuré^7')
    if cb then cb() end
    return
  end

  PerformHttpRequest(
    WHITELIST_URL,
    function(code, body, _headers)
      if code == 200 then
        local data = json.decode(body)
        if data and data.identifiers then
          whitelist = {}
          for _, id in ipairs(data.identifiers) do
            whitelist[id] = true
          end
          lastRefresh = os.time()
          print(string.format('^2[wf_whitelist] %d joueur(s) chargé(s)^7', #data.identifiers))
        end
      else
        print(string.format('^1[wf_whitelist] Erreur HTTP %d^7', code))
      end
      if cb then cb() end
    end,
    'GET',
    '',
    { ['X-Whitelist-Secret'] = WHITELIST_SECRET }
  )
end

-- Chargement initial
fetchWhitelist()

-- Rafraîchissement périodique en arrière-plan
Citizen.CreateThread(function()
  while true do
    Citizen.Wait(REFRESH_TTL * 1000)
    fetchWhitelist()
  end
end)

-- Vérification à la connexion
AddEventHandler('playerConnecting', function(_name, setKickReason, deferrals)
  deferrals.defer()
  Citizen.Wait(0)
  deferrals.update('Vérification de la whitelist...')

  -- Rafraîchir si la liste est trop ancienne
  local function check()
    local src = source
    for _, id in ipairs(GetPlayerIdentifiers(src)) do
      if whitelist[id] then
        deferrals.done()
        return
      end
    end
    setKickReason('Vous n\'êtes pas sur la whitelist.\nCandidatez sur : ' .. GetConvar('wf_site_url', 'wildfrontierrp.fr'))
    deferrals.done('Non whitelisté')
  end

  if os.time() - lastRefresh > REFRESH_TTL then
    fetchWhitelist(check)
  else
    check()
  end
end)
