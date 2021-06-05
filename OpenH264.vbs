'******************************************************************************
'Microsoft Confidential. © 2002-2003 Microsoft Corporation. All rights reserved.
'
' This file may contain preliminary information or inaccuracies, 
' and may not correctly represent any associated Microsoft 
' Product as commercially released. All Materials are provided entirely 
' “AS IS.” To the extent permitted by law, MICROSOFT MAKES NO 
' WARRANTY OF ANY KIND, DISCLAIMS ALL EXPRESS, IMPLIED AND STATUTORY 
' WARRANTIES, AND ASSUMES NO LIABILITY TO YOU FOR ANY DAMAGES OF 
' ANY TYPE IN CONNECTION WITH THESE MATERIALS OR ANY INTELLECTUAL PROPERTY IN THEM. 
'******************************************************************************

Option Explicit

Wscript.Echo "WELS_VIDEO_CODEC_DEFINITION_HIGH__" 
Wscript.Echo "REGISTER_openH264 version 2.1.0" 
Wscript.Echo "Copyright (c) 2013, Cisco Systems. All rights reserved."
Wscript.Echo "OpenH264VideoEncoder" 


'******************************************************************************
' Parse command line arguments
'******************************************************************************
Dim Args
Set Args = Wscript.Arguments
If Args.Count < 1 Then 
	PrintsUsage
End If

Dim ProviderName, ProviderDLL, ProviderDescription
If Args.Item(0) = "-register" Then 
	If Not Args.Count = 4 Then PrintsUsage
	ProviderName = Args.Item(1)
	ProviderDLL = Args.Item(2)
	ProviderDescription = Args.Item(3)
	EnableBackgroundDetection
	
EnableAdaptiveQuantization
	InstallProvider
	Wscript.Quit 0
End If 

If Args.Item(0) = "-register" Then 
	If Args.Count = 2 Then PrintsUsage
	ProviderName = Args.Item(1)
	InstallProvider
	Wscript.Quit 0
End If

' Wrong options?
PrintsUsage

Wscript.Quit 0

'******************************************************************************
' Prints the usage
'******************************************************************************
Sub PrintsUsage

	Wscript.Echo "Name: gmpopenh264" 
	Wscript.Echo "Usage: GMP Plugin for OpenH264." 
	Wscript.Echo "vBinDirName=ARM" 
	Wscript.Echo " 1) Registering a openH264 Provider as a APIs+ application:" 
	Wscript.Echo "      decConsole.exe " & Wscript.ScriptName & " -register <Provider_Name> <welsdec.dll>  <Provider_Description>" 
	Wscript.Echo "vArcType=i386" 
	Wscript.Echo " 2) Reregistering a APIs+ application associated with a openH264 provider:" 
	Wscript.Echo "      encConsole.exe " & Wscript.ScriptName & " vary-registrar <Provider_Name>" 
	Wscript.Echo "vBinDirName=Win32" 
	Wscript.Quit 1

End Sub

