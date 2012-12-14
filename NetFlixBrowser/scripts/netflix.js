﻿
////////////////////////////////////////////////////////////////////////////////////////
////// Autogenerated - do not modify or be prepared
////////////////////////////////////

(function(global, $data, undefined) {

  
  

  function registerEdmTypes() {
  
    function Edm_Boolean() { };
    $data.Container.registerType('Edm.Boolean', Edm_Boolean);
    $data.Container.mapType(Edm_Boolean, $data.Boolean);
    
    function Edm_Binary() { };
    $data.Container.registerType('Edm.Binary', Edm_Binary);
    $data.Container.mapType(Edm_Binary, $data.Blob);
    
    function Edm_DateTime() { };
    $data.Container.registerType('Edm.DateTime', Edm_DateTime);
    $data.Container.mapType(Edm_DateTime, $data.Date);
    
    function Edm_DateTimeOffset() { };
    $data.Container.registerType('Edm.DateTimeOffset', Edm_DateTimeOffset);
    $data.Container.mapType(Edm_DateTimeOffset, $data.Integer);
    
    function Edm_Time() { };
    $data.Container.registerType('Edm.Time', Edm_Time);
    $data.Container.mapType(Edm_Time, $data.Integer);
    
    function Edm_Decimal() { };
    $data.Container.registerType('Edm.Decimal', Edm_Decimal);
    $data.Container.mapType(Edm_Decimal, $data.Number);
    
    function Edm_Single() { };
    $data.Container.registerType('Edm.Single', Edm_Single);
    $data.Container.mapType(Edm_Single, $data.Number);
    
    function Edm_Double() { };
    $data.Container.registerType('Edm.Double', Edm_Double);
    $data.Container.mapType(Edm_Double, $data.Number);
    
    function Edm_Guid() { };
    $data.Container.registerType('Edm.Guid', Edm_Guid);
    $data.Container.mapType(Edm_Guid, $data.String);
    
    function Edm_Int16() { };
    $data.Container.registerType('Edm.Int16', Edm_Int16);
    $data.Container.mapType(Edm_Int16, $data.Integer);
    
    function Edm_Int32() { };
    $data.Container.registerType('Edm.Int32', Edm_Int32);
    $data.Container.mapType(Edm_Int32, $data.Integer);
    
    function Edm_Int64() { };
    $data.Container.registerType('Edm.Int64', Edm_Int64);
    $data.Container.mapType(Edm_Int64, $data.Integer);
    
    function Edm_Byte() { };
    $data.Container.registerType('Edm.Byte', Edm_Byte);
    $data.Container.mapType(Edm_Byte, $data.Integer);
    
    function Edm_String() { };
    $data.Container.registerType('Edm.String', Edm_String);
    $data.Container.mapType(Edm_String, $data.String);
    
  };
  registerEdmTypes();
  $data.Entity.extend('Netflix.Catalog.v2.Genre', {
    'Name': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:128 },
    'Titles': { type:'Array',elementType:'Netflix.Catalog.v2.Title',inverseProperty:'Genres' }
  });
  $data.Entity.extend('Netflix.Catalog.v2.Title', {
    'Id': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:128 },
    'Name': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'ShortName': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Synopsis': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'ShortSynopsis': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'AverageRating': { type:'Edm.Double',nullable:true },
    'ReleaseYear': { type:'Edm.Int32',nullable:true },
    'Url': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Runtime': { type:'Edm.Int32',nullable:true },
    'Rating': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'DateModified': { type:'Edm.DateTime',nullable:false,required:true },
    'Type': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'WebsiteUrl': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'NetflixApiId': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'TinyUrl': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'BluRay': { type:'Netflix.Catalog.v2.DeliveryFormatAvailability',nullable:false,required:true },
    'BoxArt': { type:'Netflix.Catalog.v2.BoxArt',nullable:false,required:true },
    'Dvd': { type:'Netflix.Catalog.v2.DeliveryFormatAvailability',nullable:false,required:true },
    'Instant': { type:'Netflix.Catalog.v2.InstantAvailability',nullable:false,required:true },
    'Disc': { type:'Netflix.Catalog.v2.Title',inverseProperty:'$$unbound' },
    'Season': { type:'Netflix.Catalog.v2.Title',inverseProperty:'$$unbound' },
    'Series': { type:'Netflix.Catalog.v2.Title',inverseProperty:'$$unbound' },
    'Movie': { type:'Netflix.Catalog.v2.Title',inverseProperty:'$$unbound' },
    'AudioFormats': { type:'Array',elementType:'Netflix.Catalog.v2.TitleAudioFormat',inverseProperty:'Title' },
    'Awards': { type:'Array',elementType:'Netflix.Catalog.v2.TitleAward',inverseProperty:'Title' },
    'ScreenFormats': { type:'Array',elementType:'Netflix.Catalog.v2.TitleScreenFormat',inverseProperty:'Title' },
    'Languages': { type:'Array',elementType:'Netflix.Catalog.v2.Language',inverseProperty:'Titles' },
    'Cast': { type:'Array',elementType:'Netflix.Catalog.v2.Person',inverseProperty:'TitlesActedIn' },
    'Directors': { type:'Array',elementType:'Netflix.Catalog.v2.Person',inverseProperty:'TitlesDirected' },
    //'Discs': { type:'Array',elementType:'Netflix.Catalog.v2.Title',inverseProperty:'' },
    //'Episodes': { type:'Array',elementType:'Netflix.Catalog.v2.Title',inverseProperty:'' },
    'Genres': { type:'Array',elementType:'Netflix.Catalog.v2.Genre',inverseProperty:'Titles' }
    //'Seasons': { type:'Array',elementType:'Netflix.Catalog.v2.Title',inverseProperty:'' }
  });
  $data.Entity.extend('Netflix.Catalog.v2.DeliveryFormatAvailability', {
    'Available': { type:'Edm.Boolean',nullable:false,required:true },
    'AvailableFrom': { type:'Edm.DateTime',nullable:true },
    'AvailableTo': { type:'Edm.DateTime',nullable:true },
    'Rating': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Runtime': { type:'Edm.Int32',nullable:true }
  });
  $data.Entity.extend('Netflix.Catalog.v2.BoxArt', {
    'SmallUrl': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'MediumUrl': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'LargeUrl': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'HighDefinitionUrl': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY }
  });
  $data.Entity.extend('Netflix.Catalog.v2.InstantAvailability', {
    'Available': { type:'Edm.Boolean',nullable:false,required:true },
    'AvailableFrom': { type:'Edm.DateTime',nullable:true },
    'AvailableTo': { type:'Edm.DateTime',nullable:true },
    'HighDefinitionAvailable': { type:'Edm.Boolean',nullable:false,required:true },
    'Rating': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Runtime': { type:'Edm.Int32',nullable:true }
  });
  $data.Entity.extend('Netflix.Catalog.v2.TitleAudioFormat', {
    'TitleId': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:128 },
    'DeliveryFormat': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:128 },
    'Language': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:128 },
    'Format': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:128 },
    'Title': { type:'Netflix.Catalog.v2.Title',required:true,inverseProperty:'AudioFormats' }
  });
  $data.Entity.extend('Netflix.Catalog.v2.TitleAward', {
    'Id': { key:true,type:'Edm.Guid',nullable:false,required:true },
    'Type': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Category': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Year': { type:'Edm.Int32',nullable:true },
    'Won': { type:'Edm.Boolean',nullable:false,required:true },
    'Person': { type:'Netflix.Catalog.v2.Person',inverseProperty:'Awards' },
    'Title': { type:'Netflix.Catalog.v2.Title',required:true,inverseProperty:'Awards' }
  });
  $data.Entity.extend('Netflix.Catalog.v2.Person', {
    'Id': { key:true,type:'Edm.Int32',nullable:false,computed:true },
    'Name': { type:'Edm.String',nullable:true,maxLength:Number.POSITIVE_INFINITY },
    'Awards': { type:'Array',elementType:'Netflix.Catalog.v2.TitleAward',inverseProperty:'Person' },
    'TitlesActedIn': { type:'Array',elementType:'Netflix.Catalog.v2.Title',inverseProperty:'Cast' },
    'TitlesDirected': { type:'Array',elementType:'Netflix.Catalog.v2.Title',inverseProperty:'Directors' }
  });
  $data.Entity.extend('Netflix.Catalog.v2.TitleScreenFormat', {
    'TitleId': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:128 },
    'DeliveryFormat': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:128 },
    'Format': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:128 },
    'Title': { type:'Netflix.Catalog.v2.Title',required:true,inverseProperty:'ScreenFormats' }
  });
  $data.Entity.extend('Netflix.Catalog.v2.Language', {
    'Name': { key:true,type:'Edm.String',nullable:false,required:true,maxLength:128 },
    'Titles': { type:'Array',elementType:'Netflix.Catalog.v2.Title',inverseProperty:'Languages' }
  });
  $data.EntityContext.extend('Netflix.NetflixCatalog', {
    Movies: function () { return this._generateServiceOperationQueryable('Movies', 'Titles', arguments); },
      Series: function () { return this._generateServiceOperationQueryable('Series', 'Titles', arguments); },
      Seasons: function () { return this._generateServiceOperationQueryable('Seasons', 'Titles', arguments); },
      Discs: function () { return this._generateServiceOperationQueryable('Discs', 'Titles', arguments); },
      Episodes: function () { return this._generateServiceOperationQueryable('Episodes', 'Titles', arguments); },
      Genres: { type: $data.EntitySet, elementType: Netflix.Catalog.v2.Genre },
      Titles: { type: $data.EntitySet, elementType: Netflix.Catalog.v2.Title },
      TitleAudioFormats: { type: $data.EntitySet, elementType: Netflix.Catalog.v2.TitleAudioFormat },
      TitleAwards: { type: $data.EntitySet, elementType: Netflix.Catalog.v2.TitleAward },
      People: { type: $data.EntitySet, elementType: Netflix.Catalog.v2.Person },
      TitleScreenFormats: { type: $data.EntitySet, elementType: Netflix.Catalog.v2.TitleScreenFormat },
      Languages: { type: $data.EntitySet, elementType: Netflix.Catalog.v2.Language }
  });
  
Netflix.context = new Netflix.NetflixCatalog( { name:'oData', oDataServiceHost: 'http://odata.netflix.com/Catalog' });

      
  })(window, $data);
      
    
