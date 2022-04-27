// Fill out your copyright notice in the Description page of Project Settings.


#include "NetWorkModeBase.h"

#include "actortestCharacter.h"
#include "UObject/ConstructorHelpers.h"

ANetWorkModeBase::ANetWorkModeBase()
{
	// set default pawn class to our Blueprinted character
	static ConstructorHelpers::FClassFinder<APawn> PlayerPawnBPClass(TEXT("/Game/Blueprints/MyCharacter"));
	if (PlayerPawnBPClass.Class != NULL)
	{
		DefaultPawnClass = PlayerPawnBPClass.Class;
	}
}